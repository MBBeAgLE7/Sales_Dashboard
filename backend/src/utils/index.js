import express from 'express';
import cors from "cors";
import { config } from 'dotenv';
import connectDB from '../db/database.js';
import bodyParser from 'body-parser';
import router from '../routes/Signup_route.js';
import loginRoute from '../routes/Login_route.js';
import dashboardRoute from '../routes/Dashboard_route.js';
import ShopkeeperSignupRoute from '../routes/ShopkeeperSignup_route.js';
import ShopkeeperLoginRoute from '../routes/ShopkeeperLogin_route.js';
import ShopkeeperDashboardRoute from '../routes/ShopkeeperDashboard_route.js';
import salesRoute from '../routes/saveSales_route.js';
import fetchSalesDataRoute from '../routes/fetchSales_route.js';

config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(router);
app.use(loginRoute);
app.use(dashboardRoute);
app.use(ShopkeeperSignupRoute);
app.use(ShopkeeperLoginRoute);
app.use(ShopkeeperDashboardRoute);
app.use(salesRoute);
app.use(fetchSalesDataRoute);

connectDB();

const port = process.env.PORT || 3010;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
