import boom from 'boom';

import Car from '../models/Car';
import Owner from '../models/Owner';

const getOwner = async () => {
  try {
    const owners = await Owner.find();
    return owners;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getSingleOwner = async req => {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const owner = await Owner.findById(id);
    return owner;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getOwnersCars = async req => {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const cars = await Car.find({ owner_id: id });
    return cars;
  } catch (err) {
    throw boom.boomify(err);
  }
};

export default {
  getOwner,
  getSingleOwner,
  getOwnersCars
};
