import userModel from "../model/userModel.js";
import { hashPassword, comparePassword } from "../utils/auth.js";
import Jwt from "jsonwebtoken";

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
      return res.status(201).send({
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

    return res.status(201).json({
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
    const token = await Jwt.sign({_id: user._id}, process.env.ACCESS_TOKEN, {
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

export const getUser = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.params })
    return res.status(201).json({
      success: true,
      message: "get single user success",
      user,
  })
  } catch (error) {
    return res.status(500).send({
      error: error,
      success: true,
      message: "get user failed"
    })
  }
}

export const changePassword = async (req, res) => {
  try {
    const {email, newPassword } = req.body
    if (!email) {
      return res.status(400).send({
        message: "email is required"
      })
    }
    if (!newPassword) {
      return res.status(400).send({
        message: "new password is required"
      })
    }

    //check user
    const user = await userModel.findOne({email})

    //validate
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "wrong email"
      })
    }
    const hashed = await hashPassword(newPassword)
    await userModel.findByIdAndUpdate(user._id, {password: hashed})
    return res.status(201).send({
      success: true,
      message: "password reset successfully"
    })
  } catch (error) {
    return res.status(500).send({
      error: error,
      success: false,
      message: "something went wrong"
    })
  }
}

export const updateUserProfile = async (req, res) => {
  try {
    const { username, email, password } = req.body
    const user = await userModel.findById(req.user._id)

    //password must be more than 6 charactor
    if (password && password.length < 6) {
      return res.json({ message: "password must be more than 6 charactor"})
    }
    const hashedPassword = password ? await hashPassword(password) : undefined

    //update 
    const updateUser = await userModel.findByIdAndUpdate(req.user._id,
      {
        username: username || user.username,
        password: password || user.password
      },
      {new: true}
    )
    res.status(201).send({
      success: true,
      message: "Profile Updated SUccessfully",
      updateUser,
    });

  } catch (error) {
    return res.status(500).send({
      success: false,
      error: error,
      message: "Profile update failed"
    })
  }
}
