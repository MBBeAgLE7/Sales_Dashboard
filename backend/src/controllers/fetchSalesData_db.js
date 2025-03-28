import { SalesSchema } from "../models/sales.models.js";

const fetchSalesData = async (req, res) => {
    const { date } = req.query;

    try {
        const salesData = await SalesSchema.find({ date });

        if (!salesData) {
            return res.status(404).json({ message: 'No sales found for the specified date' });
        }
        const aggregatedSales = salesData.reduce((acc, sale) => {
            const { shopName, shopkeeperId, salesAmount } = sale;
            const key = `${shopName}-${shopkeeperId}`;

            if (!acc[key]) {
                acc[key] = { shopName, shopkeeperId, salesAmount: 0 };
            }
            acc[key].salesAmount += salesAmount;

            return acc;
        }, {});

        const result = Object.values(aggregatedSales);

        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch sales data' });
    }
};

export default fetchSalesData
