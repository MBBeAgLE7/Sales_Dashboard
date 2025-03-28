import { ShopkeeperSignup } from "../models/shopkeeper_Signup.models.js";

const fetchShopkeeperDashboardData = async (req, res) => {
  const { email } = req.query;
  try {
    const owner = await ShopkeeperSignup.findOne({ email });
    if (!owner) { 
      return res.status(404).json({ message: "User not found" });
    }
    res.json({
      name: owner.name,
      email: owner.email,
      organizationId: owner.organizationId,
      shopkeeperId: owner.shopkeeperId
    });
    console.log(owner.shopkeeperId);
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export default fetchShopkeeperDashboardData;