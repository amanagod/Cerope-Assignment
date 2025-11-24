import { responseHandler, errResponseHandler} from "../utils/response.js"
import authservices from "../services/authservices.js";
class AuthController{

Signup= async (req,res,next)=>{
try{

const bodyData = req.body;

      const { user} = await authservices.register(bodyData);

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
catch(error){
    console.log("error in signup Controller ",error)
    errResponseHandler(res,error);
    next();
}
}

}

export default new AuthController();