import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;

const subscriberSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  createdAt: { type: Date, default: Date.now },
});

const Subscribers = model("SubUsers", subscriberSchema);

export default Subscribers;
