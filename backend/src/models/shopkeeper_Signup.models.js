import mongoose from 'mongoose';

const shopkeeperSignup = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    organizationId: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
    },
    shopkeeperId: {
      type: String,
      required: true,
      unique: true,
      default: function() {
        return this.name.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 1000000);
      }
    }
  },
  { timestamps: true }
);

export const ShopkeeperSignup = mongoose.model('Shopekeeper', shopkeeperSignup);
