import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
        },

    email:{
        type:String,
        required:[true,'Email is required'],
        unique:[true,'User already exists'],
        lowercase:true,
        trim:true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Please fill a valid email address']
    },
    password:{
        type:String,
        required:[true,'Password is required'],
        minlength:[8,'Password must be at least 8 characters long'],
        select:false,
    }
},{timestamps:true});

userSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(15);
    this.password = await bcrypt.hash(this.password,salt)
    next();
})

userSchema.methods.MatchPassword = async function(enteredPassword){
    if(!enteredPassword){
          throw new Error("Entered password is missing");
    }
     if (!this.password) {
        throw new Error("User password hash not loaded (did you forget .select('+password')?)");
    }
    return await bcrypt.compare(enteredPassword,this.password);
}

const User = mongoose.model('User',userSchema);

export default User;