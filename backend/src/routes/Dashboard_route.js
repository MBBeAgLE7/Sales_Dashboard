import fetchDashboardData from "../controllers/Dashboard_db.js";
import express from "express";

const dashboardRoute = express.Router();

dashboardRoute.get('/api/dashboard', fetchDashboardData);

export default dashboardRoute;