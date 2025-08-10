import logger from "../utils/logger.js"
import User from "../models/user.js"
import { validateUserLogin, validateUserRegistration } from "../utils/validation.js"
import generateToken from "../utils/generateToken.js"


//create user
const createUser = async(req, res) => {
    try {
        logger.info(`Hitting the create user endpoint ....`)
        //validate schema
        const {error} = validateUserRegistration(req.body)
        if(error){
            logger.warn('validation error', error.details[0].message)
            return res.status(400).send({
                status: false,
                message: error.details[0].message
            })
        }
        const {username, email, password, role} = req.body
        let user = await User.findOne({
            $or : [
                {email},
                {username}
            ]
        })
        console.log(user)
        if(user) {
            logger.info(`User already exists ${email}`)
            return res.status(400).send({
                status : false,
                message : 'User already exists'
            })
        }
        user = new User({
            username,
            email,
            password,
            role
        })

        await user.save()
        logger.info(`User have been created`)

        //Generating token
        const {accessToken, refreshToken} = await generateToken(user)

        return res.status(201).send({
            status : true,
            data : [
                {
                    userId : user._id,
                    username : user.username,
                    email : user.email,
                    accessToken,
                    refreshToken
                }
            ]
        })
    } catch (error) {
        logger.info(`This is an error : ${error}`)
        return resizeBy.status(500).send({
            status : false,
            message : 'Something went wrong'
        })
    }
}

//login user
const loginUser = async(req, res) => {
    try {
        logger.info(`Hitting the login endpoint...`)

        const {error} = validateUserLogin(req.body)
        if(error){
            logger.warn(`Something went wrong : ${error.details[0].message}`)
            return res.status(400).send({
                status : false,
                message : error.details[0].message
            })
        }
        
        const {email, password} = req.body
        const user = await User.findOne({email}).select("+password")
        if(!user){
            logger.warn(`User not found with this email`)
            return res.status(404).send({
                status : false,
                message : 'User not found with this email'
            })
        }

        logger.info(user)

        //if present
        const isValiduser = await user.comparedPassword(password);

        if (!isValiduser) {
          logger.warn("User password didn't matched.");
          return res.status(400).send({
            status: false,
            message: "User password didn't matched.",
          });
        }

        const { accessToken, refreshToken } = await generateToken(user);

        return res.status(200).send({
          status: true,
          message: "User login successful",
          data: [
            {
              userId: user._id,
              username: user.username,
              accessToken,
              refreshToken,
            },
          ],
        });


    } catch (error) {
        logger.warn(`Error : ${error.stack}`)
        return res.status(500).send({
            status : false,
            message: `Something went wrong...`
        })
    }
}



export { createUser, loginUser };