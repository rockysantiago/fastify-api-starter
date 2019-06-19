import mongoose, { Schema } from 'mongoose';

const ownerSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String
});

export default mongoose.model('Owner', ownerSchema);
