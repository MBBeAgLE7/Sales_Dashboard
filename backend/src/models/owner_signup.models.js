import mongoose from "mongoose";

const SignUp = new mongoose.Schema({
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
    organization: {
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
    organisationId: {
      type: String,
      required: true,
      unique: true,
      default: function() {
        return this.organization.substring(0, 3).toUpperCase() + Math.floor(Math.random() * 1000000);
      }
    }
});

export const SignupSchema = mongoose.model('SignUp', SignUp);