import React, { useState } from 'react';
import { Mail, Lock,  Eye,EyeOff } from 'lucide-react'; 
import { Link ,useNavigate} from "react-router-dom";
import loginImage from '../assets/Gemini_Generated_Image_zfqxfgzfqxfgzfqx.png'
import {Post} from "../utils/api.js"




const CeropeLogoIcon = () => (
    <span className="text-xl font-semibold text-white tracking-wider flex items-center gap-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"></path>
            <path d="M7 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"></path>
        </svg>
        Cerope
    </span>
);


// Reusable Input Component (Simplified for Login, does not need password toggling unless explicitly requested)
    const FormInput = ({ icon: Icon, placeholder, type = 'text', error, value, label ,onChange , name }) => {
        const [showPassword, setShowPassword] = useState(false);
        const isPassword = type === 'password';
        const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

        return (<div className="w-full">
            <label className="block text-sm font-medium mb-1 text-slate-700 ">
                {label}
            </label>

            <div className="relative">
                <Icon
                    className=" absolute left-3  top-1/2 -translate-y-1/2  w-5 h-5 text-gray-400 pointer-events-none                            "
                />

                <input
                    type={inputType}
                    value={value}
                    onChange={onChange}
                    name={name}
                    placeholder={placeholder}
                    className="
                                    w-full pl-12 pr-4 py-4
                                    text-base text-gray-700
                                    bg-white
                                    border border-gray-300
                                    rounded-xl
                                    focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500
                                    placeholder-gray-400
                                    shadow-sm
                                "
                />
                
                 {isPassword && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <Eye size={18} className="text-slate-400" />
            ) : (
              <EyeOff size={18} className="text-slate-400" />
            )}
          </button>
        )}


            </div>
            {error && <div className="text-red-500 text-sm mt-1 ml-5">{error}</div>}

        </div>)
    };


export default function Login() {
    const [formdata, setFormdata] = useState({
        email: "",
        password: "",
        rememberMe: false
    });
    const [errors, setErrors] = useState({});
        const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormdata(val => ({
            ...val,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const validateForm = () => {
        const errs = {};

        if (!formdata.email.trim()) {
            errs.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
            errs.email = "Enter a correct email address";
        }

        if (!formdata.password.trim()) {
            errs.password = "Password is required";
        }
        
        
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        const result=  LogIn(formdata);
        console.log("Login Data:", formdata);
        // Process login here (e.g., API call)
    };

    const LogIn =async (data)=>{
    try{
const {  email, password } = data;
      const response = await Post("auth/login",{
        email,
        password
      });
      console.log('Login response:', response);
      navigate('/');
      return response;
    }
    catch(err){
        throw new Error(err?.message || 'Login failed');
    }
}


    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4"
             style={{ 
                 // Gradient background matching the image
                 background: 'linear-gradient(180deg, #f7f3ff 0%, #e8e2fa 100%)'
             }}>
            
            {/* The main card container */}
            <div className="
                w-full max-w-4xl 
                 rounded-3xl 
                overflow-hidden 
                flex flex-col lg:flex-row
                p-8 md:p-12
            "
             style={{ 
                 // Gradient background matching the image
                 background: 'linear-gradient(180deg, #f7f3ff 0%, #e8e2fa 100%)'
             }}>

                {/* 1. Form Section (Left side in the image) */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center pr-0 lg:pr-16 order-2 lg:order-1">
                    <h2 className="
                        text-3xl sm:text-4xl font-bold 
                        text-gray-900 
                        mb-2 
                        text-center lg:text-left
                    ">
                        Welcome Back to Cerope
                    </h2>
                    <p className="text-gray-500 mb-8 text-center lg:text-left">
                        Your personalized fashion journey awaits.
                    </p>

                    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                        
                        {/* Email Input */}
                        <FormInput 
                            icon={Mail} 
                            label="Email" 
                            placeholder="Email" 
                            type="email" 
                            name="email" 
                            value={formdata.email} 
                            onChange={handleChange} 
                            error={errors.email} 
                        />

                        {/* Password Input */}
                        <FormInput 
                            icon={Lock} 
                            label="Password" 
                            placeholder="Password" 
                            type="password" 
                            name="password" 
                            value={formdata.password} 
                            onChange={handleChange} 
                            error={errors.password} 
                        />

                        {/* Remember Me & Forgot Password */}
                        <div className="flex justify-between items-center text-sm">
                            <div className="flex items-center">
                                <input
                                    id="rememberMe"
                                    name="rememberMe"
                                    type="checkbox"
                                    checked={formdata.rememberMe}
                                    onChange={handleChange}
                                    className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                                />
                                <label htmlFor="rememberMe" className="ml-2 text-gray-500">
                                    Remember me
                                </label>
                            </div>
                            <a href="#" className="font-medium text-purple-600 hover:text-purple-700">
                                Forgot Password?
                            </a>
                        </div>
                        
                        {/* Sign In Button */}
                        <button
                            type="submit"
                            className="
                                w-full py-3 mt-4
                                text-lg font-semibold text-white
                                bg-gray-800
                                rounded-xl
                                shadow-lg hover:bg-gray-700
                                transition duration-200
                            "
                        >
                            Sign In
                        </button>
                        
                        {/* OR Divider */}
                        <div className="flex items-center space-x-2 py-2">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="text-gray-500 text-sm">or</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>

                        {/* Google Sign In Button */}
                        <button
                            type="button"
                            className="
                                w-full py-3 flex items-center justify-center gap-3
                                text-base font-semibold text-gray-700
                                bg-white
                                border border-gray-300
                                rounded-xl
                                shadow-md hover:bg-gray-100
                                transition duration-200
                            "
                        >
                            {/* Placeholder for Google G icon */}

                            <span>Google</span>
                        </button>

                        {/* Don't have an account? Link */}
                        <div className="text-center pt-2 text-gray-600 text-sm">
                            Don't have an account?
                            <Link to="/" className="font-semibold text-purple-600 hover:text-purple-700 ml-1">
                                Sign up
                            </Link>
                        </div>

                    </form>
                </div>

                {/* 2. Image Section (Right side in the image) */}
                <div className="
                    w-full lg:w-1/2 
                    relative 
                    min-h-[300px] lg:min-h-0 
                    mt-8 lg:mt-0 lg:ml-8 
                    flex items-center justify-center 
                    order-1 lg:order-2 
                ">
                    {/* The image card with rounded corners and a slight shadow */}
                    <div className="
                        relative w-full h-full 
                        rounded-3xl overflow-hidden 
                        shadow-xl 
                        min-h-[400px]
                        // Adding a distinct border/glow to match the image's aesthetic
                        ring-4 ring-offset-2 ring-purple-300/50 
                    ">
                        <img 
                            src={loginImage} 
                            alt="Fashion model with neon lights" 
                            className="w-full h-full object-cover" 
                        />
                        {/* Logo overlay */}
                        <div className="absolute top-4 right-4 p-2 rounded-lg bg-black/10 backdrop-blur-sm">
                            <CeropeLogoIcon />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}