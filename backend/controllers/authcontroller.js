import { responseHandler, errResponseHandler} from "../utils/response.js"

class AuthController{

Signup= async (req,res,next)=>{
try{

const bodyData = req.body;

    //   const { user, token } = await authService.register(bodyData);

    //   responseHandler.send(res, {
    //     status: 201,
    //     success: true,
    //     message: 'Registration successful. Please verify your email.',
    //     data: {
    //       user,
    //       token,  // Send the token with the registration response
    //     },
    //   });

}
catch(error){
    console.log("error in signup Controller ",error)
    errResponseHandler(res,error);
    next();
}
}

}

export default new AuthController();