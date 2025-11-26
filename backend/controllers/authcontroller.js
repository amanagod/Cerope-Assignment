import { responseHandler, errResponseHandler } from "../utils/response.js"
import authservices from "../services/authservices.js";
class AuthController {

  Signup = async (req, res, next) => {
    try {

      const bodyData = req.body;
   console.log(bodyData)
      const user = await authservices.register(bodyData);

      responseHandler(res, {
        status: 201,
        success: true,
        message: 'Registration successful. Please verify your email.',
        data: {
          user,
        },
      });
      next();
    }
    catch (error) {
      console.log("error in signup Controller ", error)
      errResponseHandler(res, error);
      next();
    }
  }


  Login = async (req, res, next) => {
    try {

      const bodyData = req.body;

      const token = await authservices.Login(bodyData);
      // res.cookie("token", token, {
      //   expires: new Date(Date.now() + 1000000)
      // });


      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24, // 1 day
      });

      responseHandler(res, {
        status: 201,
        success: true,
        message: 'Login successful.',
        data: {},
      });
      next();
    }
    catch (error) {
      console.log("error in Login Controller ", error)
      errResponseHandler(res, error);
      next();
    }
  }

}

export default new AuthController();