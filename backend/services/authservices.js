import User from "../models/users.model.js";
import {AppError} from "../utils/AppErrors.js";
class AuthServices {

    async register(data) {
        try {
            const existingUser = await User.findOne({
                email: data.email
            });
            if (existingUser) {
                throw new AppError('User already exists with this email',statusCode=409);
            }

            const user = new User({
                name: data.name,
                email: data.email,
                password: data.password
            });
            await user.save();

            return {
                name: data.name,
                email: data.email
            };
        }
        catch (error) {
            throw error("Error in registering user: ", error)
        }
    }

}

export default new AuthServices();