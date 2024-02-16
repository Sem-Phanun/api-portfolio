import jwt from "jsonwebtoken";
import userModel from "../model/userModel.js";


// export const requireSign = (req, res, next) => {
//     try {
//         const decode = Jwt.verify(
//             req.headers.authorization,
//             process.env.ACCESS_TOKEN
//         )
//         req.user = decode
//         next()
//     } catch (error) {
//         console.log(error)
//     }
// }
export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    var token = null
    if(authHeader != null && authHeader != ""){
        token = authHeader.split(" ")
        token = token[1]
    }
    if (token == null) {
        res.status(401).send({ message: "Unauthorized"})
    } else {
        jwt.verify(token, process.env.SECURITY_KEY, (error, data) => {
            if (error) {
                res.status(401).send({ message: "Unauthorized"})
            } else {
                res.user = data
                next()
            }
        })
    }
}

export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id)
        if(user.role !== 1){
            return res.status(401).send({
                success: false,
                message:"UnAuthorized Access"
            })
        }else {
            next()
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
        success: false,
        error,
        message: "Error in admin middelware",
      });
    }
}