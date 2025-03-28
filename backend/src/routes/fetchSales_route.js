import express from "express";
import fetchSalesData from "../controllers/fetchSalesData_db.js";

const fetchSalesDataRoute = express.Router();

fetchSalesDataRoute.get('/api/shopkeeper-sales', fetchSalesData);

export default fetchSalesDataRoute;