import mongoose from 'mongoose';

const salesSchema = new mongoose.Schema({
  shopName: {
    type: String,
    required: true,
    unique: true,
  },
  salesAmount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true
  },
  shopkeeperId: {
    type: String,
    required: true
  },
  organizationId:{
    type: String,
    required: true
  }
},
{ timestamps: true });

export const SalesSchema = mongoose.model('Sales', salesSchema);
