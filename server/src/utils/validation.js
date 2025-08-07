import Joi from "joi";

const validateUserRegistration = (data) => {
    const schema = Joi.object({
        username : Joi.string().min(3).max(30).required(),
        email : Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        role : Joi.string().valid('user', 'admin').required()
    })
    return schema.validate(data)
}

const validateUserLogin = (data) => {
    const schema = Joi.object({
        email : Joi.string().email().required(),
        password : Joi.string().min(6).required()
    })
    return schema.validate(data)
}

export {
    validateUserLogin,
    validateUserRegistration
}