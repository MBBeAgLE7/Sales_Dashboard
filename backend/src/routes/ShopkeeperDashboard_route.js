import express from "express";
import fetchShopkeeperDashboardData from "../controllers/ShopkeeperDashboard_db.js";

const ShopkeeperDashboardRoute = express.Router();

ShopkeeperDashboardRoute.get('/api/shopkeeper-Dashboard', fetchShopkeeperDashboardData);

export default ShopkeeperDashboardRoute;