import express from "express";
import ShopkeeperLogin from "../controllers/ShopkeeperLogin_db.js";

const ShopkeeperLoginRoute = express.Router();

ShopkeeperLoginRoute.post('/api/shopkeeper-Login', ShopkeeperLogin);

export default ShopkeeperLoginRoute;