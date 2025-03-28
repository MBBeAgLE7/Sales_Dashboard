import loginUser from "../controllers/Login_db.js";
import express from "express";

const loginRoute = express.Router();

loginRoute.post('/api/Login', loginUser);

export default loginRoute;