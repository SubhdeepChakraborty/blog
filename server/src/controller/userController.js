import logger from "../utils/logger.js"
import User from "../models/user.js"
import { validateUserLogin, validateUserRegistration } from "../utils/validation.js"
import generateToken from "../utils/generateToken.js"
import dotenv from "dotenv"
import RefreshToken from "../models/token.js"

dotenv.config()

//ping
const ping = async(req, res) => {
  try {
    return res.status(200).send({
      status: false,
      message : 'Server is up and running..'
    })
  } catch (error) {
    logger.warn(`Something went wrong ${error.stack}`)
    return res.status(500).send({
      status : false,
      message : `Internal server error`
    })
  }
}

//create user
const createUser = async(req, res) => {
    try {
      logger.info(`Hitting the create user endpoint ....`);
      //validate schema
      const { error } = validateUserRegistration(req.body);
      if (error) {
        logger.warn("validation error", error.details[0].message);
        return res.status(400).send({
          status: false,
          message: error.details[0].message,
        });
      }
      const { username, email, password, role } = req.body;
      let user = await User.findOne({
        $or: [{ email }, { username }],
      });
      console.log(user);
      if (user) {
        logger.info(`User already exists ${email}`);
        return res.status(400).send({
          status: false,
          message: "User already exists",
        });
      }
      user = new User({
        username,
        email,
        password,
        role,
      });

      await user.save();
      logger.info(`User have been created`);

      //Generating token
      const { accessToken, refreshToken } = await generateToken(user);

      // Inside createUser or loginUser (after generating tokens)
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true, // cannot be accessed by JS
        secure : process.env.NODE_ENV === 'production',
        maxAge: 1 * 24 * 60 * 60 * 1000, // 7 days
      });

      return res.status(201).send({
        status: true,
        data: [
          {
            userId: user._id,
            username: user.username,
            email: user.email,
            accessToken,
            // refreshToken,
          },
        ],
      });
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

        res.cookie("refreshToken", refreshToken, {
          httpOnly: true, // cannot be accessed by JS
          secure: process.env.NODE_ENV === "production",
          maxAge: 1 * 24 * 60 * 60 * 1000, // 1 days
        });

        return res.status(200).send({
          status: true,
          message: "User login successful",
          data: [
            {
              userId: user._id,
              username: user.username,
              accessToken,
            //   refreshToken,
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

//refreshtoken
const refreshToken = async(req, res) => {
  logger.info('Hitting refreshToken endpoint....')
  try {
    const {refreshTokenUser} = req.body
    if (!refreshTokenUser) {
      logger.warn("Refresh token is required");
      return res.status(400).send({
        status: false,
        message: "Refresh token is required",
      });
    }
    //Verify the refresh token
    const storedToken = await RefreshToken.findOne({
      token: refreshTokenUser,
    });

    if(!storedToken || storedToken.expiresAt < new Date()){
      logger.warn('Invalid refresh token')
      return res.status(400).send({
        status : false,
        message : 'Invalid refresh token'
      })
    }

    //find the user
    const user = await User.findById(storedToken.user)
    if(!user){
      logger.warn('User not found')
      return res.status(404).send({
        status : false,
        message : 'User not found'
      })
    }

    //Generate new accessToken
    const { accessToken: newacessToken, refreshToken: newrefreshToken } =
      await generateToken(user);

    //delete the old one
    await RefreshToken.deleteOne({_id : storedToken._id})

    return res.status(201).send({
      status: true,
      message: "New acess token generated successfully",
      data: [
        {
          userId: user._id,
          username: user.username,
          accessToken: newacessToken,
          refreshToken: newrefreshToken,
        },
      ],
    });

  } catch (error) {
    logger.warn(`Something went wrong... ${error}`)
    return res.status(500).send({
      status : false,
      message : 'Internal server error'
    })
  }
}


export { createUser, loginUser, refreshToken, ping };