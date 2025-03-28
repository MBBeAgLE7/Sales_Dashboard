import { SignupSchema } from "../models/owner_signup.models.js";

const fetchDashboardData = async (req, res) => {
  const { email } = req.query;
  try {
    const owner = await SignupSchema.findOne({ email });
    if (!owner) { 
      return res.status(404).json({ message: "User not found" });
    }
    res.json({
      name: owner.name,
      email: owner.email,
      organisation: owner.organization,
      organisationId: owner.organisationId,
    });
    console.log(owner.organisationId);
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({ message: 'Server error' });
  }
};

export default fetchDashboardData;