import mongoose, { Schema } from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

const serviceSchema = new Schema({
  car_id: ObjectId,
  name: String,
  date: String
});

export default mongoose.model('Service', serviceSchema);
