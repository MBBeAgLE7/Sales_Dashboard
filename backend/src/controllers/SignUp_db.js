import { SignupSchema } from "../models/owner_signup.models.js";

const saveData = async(req, res) => {
    const { 
        name,
        email,
        phone,
        organization,
        password,
        confirmPassword,
     } = req.body;
    console.log('Received data:', { 
        name,
        email,
        phone,
        organization,
        password,
        confirmPassword,
    });
    const newUser = new SignupSchema({ 
        name,
        email,
        phone,
        organization,
        password,
        confirmPassword,
     });
    try {
      console.log('Attempting to save user to the database...');
      await newUser.save();
      console.log('User saved to the database'); // Log success
      res.status(201).json({ message: 'User saved successfully' });
    } catch (error) {
      console.error('Error saving user:', error); // Log the error
      res.status(500).json({ error: 'Failed to save user' });
    }
}

export default saveData;