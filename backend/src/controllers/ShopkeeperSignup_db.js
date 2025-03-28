import { ShopkeeperSignup } from "../models/shopkeeper_Signup.models.js";

const saveShopkeeperData = async(req, res) => {
    const { 
        name,
        email,
        phone,
        organizationId,
        password,
        confirmPassword,
     } = req.body;
    console.log('Received data:', { 
        name,
        email,
        phone,
        organizationId,
        password,
        confirmPassword,
    });
  
    const newUser = new ShopkeeperSignup({ 
        name,
        email,
        phone,
        organizationId,
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

export default saveShopkeeperData;