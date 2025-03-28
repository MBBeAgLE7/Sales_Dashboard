import mongoose from 'mongoose';

const ShopkeeperLoginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const shopkeeperLoginSchema = mongoose.model('ShopkeeperLogin', ShopkeeperLoginSchema);
