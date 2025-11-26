import User from "../models/users.model.js";
import { UserExistsError, AppError, UserDontExistsError } from "../utils/AppErrors.js";
import jwt from 'jsonwebtoken'
class AuthServices {

    async register(data) {
        try {
            if (!data?.email?.trim() || !data?.password?.trim() || !data?.name?.trim() || !data?.confirmPassword.trim()) {
                throw new AppError("Name, email and password , confirm password are required", 400);
            }

            const existingUser = await User.findOne({
                email: data.email
            });
            if (existingUser) {
                throw new UserExistsError();
            }
            if (!/\S+@\S+\.\S+/.test(data.email)) {
                throw new AppError("Enter correct email address");
            }
            if (data.password?.trim().length < 8) {
                throw new AppError("Password should have 8 characters");
            }
            if (data.password !== data.confirmPassword) {
                throw new AppError("Passwords and confirm password are different");
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
            throw error;
        }
    }

    async Login(data) {
        try {
            const user = await User.findOne({ email: data.email }).select("+password");;
            if (!user) {
                throw new UserDontExistsError("Invalid email or password", 401);
            }
            const passwordMatch = await user.MatchPassword(data.password);
            if (!passwordMatch) {
                throw new AppError("Invalid email or password", 401);
            }
            const token = jwt.sign({
                email: user.email
            }, process.env.JWTSECRET, 
            { expiresIn: '5d' }
        );

        return token;
        }
        catch (error) {
            throw error;
        }
    }

}

export default new AuthServices();