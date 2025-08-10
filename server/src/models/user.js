import mongoose from "mongoose"
import logger from "../utils/logger.js"
import argon2 from "argon2"

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
  },
  role : {
    type : String,
    enum : ['user', 'admin'],
    default : 'user'
  },
  password : {
    type : String,
    required : true,
    minLength : 6,
    select : false
  },
  searchString : {
    type : String,
    index : true
  }
},{
    timeseries : true,
    timestamps : true
});

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();
    try {
        //main
        if(this.isModified('password')){
            this.password = await argon2.hash(this.password)
        }
        if(this.isModified('username') || this.isModified('email')){
            this.searchString = `${this.username.trim()}${this.email.trim()}`.toLowerCase()
        }
        next()
    } catch (error) {
        logger.error(`Something went wrong : ${error.stack}`)
        next()
    }
})

//Updating search string for the future update of email and username
userSchema.pre('findOneAndUpdate', function(next){
    const update = this.getUpdate();

    if(update.username || update.email){
        const username = update.username.trim()
        const email = update.email.trim()
        update.searchString = `${username}${email}`.toLowerCase()
        this.setUpdate(update)
    }

    next()
})

//delete password
userSchema.methods.toJSON = function(){
    const obj = this.toObject()
    delete obj.password;
    return obj
}

//compared password
userSchema.methods.comparedPassword = async function (combinedPassword) {
    try {
        logger.info(this.password, 'password')
        return await argon2.verify(this.password, combinedPassword.trim())
    } catch (error) {
        logger.error(`Something went wrong : ${error.stack}`)
        throw new Error('Error comapring password')
    }
}

const User = mongoose.model('user', userSchema)
export default User