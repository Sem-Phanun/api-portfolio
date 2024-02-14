import userModel from "../model/userModel.js";
import { hashPassword, comparePassword } from "../utils/auth.js";
import JWT from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username) {
      return res.sned({
        message: "Username is required",
      });
    }
    if (!email) {
      return res.sned({
        message: "Email is required",
      });
    }
    if (!password) {
      return res.sned({
        message: "Password is required",
      });
    }

    //checking user
    const existingUser = await userModel.findOne({ email });

    //checking existing user
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already register please login",
      });
    }

    const hashedPassword = await hashPassword(password);

    const user = new userModel({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();

    return res.status(200).json({
      success: true,
      message: "register sccuess",
      user,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "register failed",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    //checking user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not register",
      });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      res.status(200).send({
        success: false,
        message: "Invalid password",
      });
    }
    const token = await JWT.sign({_id: user._id}, process.env.ACCESS_TOKEN, {
        expiresIn: "7d"
    })
    res.status(200).json({
        success: true,
        message: "login success",
        user: {
            _id: user._id,
            username: user.username,
            email: user.email,
        },
        token,
    })
  } catch (error) {
    return res.status(500).send({
      message: "Login failed",
    });
  }
};
