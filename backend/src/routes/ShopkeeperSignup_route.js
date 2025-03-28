import express from "express";
import saveShopkeeperData from "../controllers/ShopkeeperSignup_db.js";

const ShopkeeperSignupRoute = express.Router();

ShopkeeperSignupRoute.post('/api/shopkeeper-Signup', saveShopkeeperData);

export default ShopkeeperSignupRoute;