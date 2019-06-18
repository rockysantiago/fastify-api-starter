import mongoose, { Schema } from 'mongoose';

const carSchema = new Schema({
  title: String,
  brand: String,
  price: String,
  age: Number,
  services: {
    type: Map,
    of: String
  }
});

export default mongoose.model('Car', carSchema);
