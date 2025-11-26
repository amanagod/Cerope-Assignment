import { Mail, Lock, User, Eye,EyeOff } from 'lucide-react'; // Icons for the input fields
import dressImage from '../assets/dress.jpg';
import { useState } from 'react';
import { Link,useNavigate } from "react-router-dom";
import {Post} from "../utils/api.js"

const Register =async (data)=>{
    // const[Loading,setIsLoading]=useState(false);

const { name, email, password, privacyPolicy,confirmPassword } = data;
    // setIsLoading(true);

    try {
      const response = await Post("auth/signup",{
        name,
        email,
        password,
        privacyPolicy,
        confirmPassword
      });
    //   console.log('Signup response:', response);
       navigate('/login');
      return response;
    } catch (error) {
      console.error('Signup error:', error);
      // alert('Registration failed. Please try again.');
      throw new Error(error?.message || 'Signup failed');
    } 
}

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
export default function SignUp() {
    // Placeholder for the image section logo (the 'V' shape)
    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        privacyPolicy:false
    });
    const [errors, seterrors] = useState({});   ///this work is pending
    const navigate = useNavigate();

    

    const handleChange =(e)=>{
        const {name , value,type ,checked} = e.target;
        setFormdata((val)=>({
            ...val,
            [name]:type==='checkbox'?checked:value
        }))

    }

const validateform = () => {
  const errs = {};   // NEW

  if (!formdata.name.trim()) {
    errs.name = "Name is required";
  }

  if (!formdata.email.trim()) {
    errs.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
    errs.email = "Enter correct email address";
  }

  if (!formdata.password) {
    errs.password = "Password is required";
  } else if (formdata.password.length < 8) {
    errs.password = "Password should have 8 characters";
  }

  if (formdata.password !== formdata.confirmPassword) {
    errs.confirmPassword = "Passwords are different";
  }

  if (!formdata.privacyPolicy) {
    errs.privacyPolicy = "Please tick the checkbox to agree the terms";
  }

  seterrors(errs);      // Only once ✔
  return Object.keys(errs).length === 0;
};

const handleSubmit =async(e)=>{
    e.preventDefault();

    if(!validateform()){return}
try{
    const result= await Register(formdata);
}catch(err){
    console.log(err);
}
    console.log(formdata);
}


    // Reusable Input Component


    return (
        <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4 sm:p-8">
            {/* The main card container which adapts its layout */}
            <div className="
                w-full max-w-5xl

                rounded-3xl
                
                overflow-hidden
                flex flex-col sm:flex-row
            ">


                <div className="
                    sm:w-1/2
                    relative
                    bg-pink-100 // Fallback background
                    md:h-64 sm:h-auto
                    min-h-[500px]
                    flex items-center justify-center
                    overflow-hidden
                    md:px-6
                ">
                    {/* Background Image Container with Gradient Overlay */}
                    <img src={dressImage} alt="" className=' rounded-tr-3xl rounded-br-3xl rounded-tl-3xl rounded-bl-3xl  object-cover ' />
                </div>

                {/* 2. Form Section (Left on desktop, Bottom on mobile) */}
                <div className="sm:w-1/2 p-6 sm:p-12 lg:p-16 flex flex-col justify-center bg-white rounded-3xl ">
                    <h2 className="
                        text-3xl sm:text-4xl font-bold
                        text-gray-800
                        mb-8
                        text-center sm:text-left
                    ">
                        Set up your **Cerope Account**
                    </h2>

                    <form className="space-y-4" onSubmit={handleSubmit} noValidate preventDefault >
                        {/* Name Input */}
                        <FormInput icon={User} label="Name" placeholder="Name" type="text" name="name"  value={formdata.name} onChange={handleChange} error={errors.name} />

                        {/* Email Input */}
                        <FormInput icon={Mail} label="Email Address" placeholder="Email Address" type="email" name='email' value={formdata.email} onChange={handleChange} error={errors.email} />

                        {/* Password Input */}
                        <FormInput icon={Lock} label="Password" placeholder="Password" type="password" value={formdata.password} name='password' onChange={handleChange} error={errors.password} />

                        {/* Confirm Password Input */}
                        <FormInput icon={Lock} label="Confirm Password" placeholder="Confirm Password" type="password" name='confirmPassword' value={formdata.confirmPassword}  onChange={handleChange} error={errors.confirmPassword} />

                        {/* Checkbox and Terms */}
                        <div className="flex items-start pt-2">
                            <input
                                id="terms"
                                type="checkbox"
                                className="mt-1 w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500"
                                onChange={handleChange}
                                name='privacyPolicy'
                                checked={formdata.privacyPolicy}
                            />
                            <label htmlFor="terms" className="ml-2 text-sm text-gray-500">
                                I agree to Cerope's <a href="#" className="font-medium text-pink-600 hover:text-pink-700">Terms of Service</a> & <a href="#" className="font-medium text-pink-600 hover:text-pink-700">Privacy Policy</a>
                            </label>
                           
                        </div>
                             {errors.privacyPolicy && <div className="text-red-500 text-sm mt-1 ml-5">{errors.privacyPolicy}</div>}
                        {/* Sign Up Button */}
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
                            Sign Up
                        </button>
                    </form>

                    {/* Already a member? Link */}
                    <div className="text-center mt-6 text-gray-600">
                        Already a member?
                        <Link to="/login" className="font-semibold text-pink-600 hover:text-pink-700 ml-1">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}