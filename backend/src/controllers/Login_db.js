import { SignupSchema } from "../models/owner_signup.models.js";

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log({ email, password });    
    try {
        const checkUser = await SignupSchema.findOne({ email });
        if (!checkUser) {
            console.log("You need to SignUp!!");
            return res.status(404).json({message: "You need to SignUp"});
        }
        if(checkUser.password != password){
            console.log("Password Incorrect!!");
            return res.status(401).json({message: "Enter the correct Password"});
        }
        console.log("Login Successful!");
        return res.status(200).json({ message: "Login Successful!!", email });

    } catch (error) {
        console.error("Error: ", error);
        return;
    }
};

export default loginUser;
