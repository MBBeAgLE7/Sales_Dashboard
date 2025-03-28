import { SalesSchema } from "../models/sales.models.js";

const saveSales = async(req, res) => {
    const { shopName, salesAmount, date, shopkeeperId, organizationId } = req.body;
    console.log({ shopName, salesAmount, date, shopkeeperId, organizationId });

    const newSales = new SalesSchema({
        shopName,
        salesAmount,
        date,
        shopkeeperId,
        organizationId
    });
    try{
        await newSales.save();
        console.log("Sales Saved");  
        res.status(201).json({ message: 'Sales saved successfully' });     
    }
    catch(error){
        console.log("Sales not saved");
        res.status(500).json({ error: 'Failed to save Sales' });
    }
}

export default saveSales;