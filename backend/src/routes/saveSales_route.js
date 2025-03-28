import express from "express";
import saveSales from "../controllers/saveSales_db.js";

const salesRoute = express.Router();

salesRoute.post('/api/shopkeeper-sales', saveSales);

export default salesRoute;
