import boom from 'boom';

import Service from '../models/Service';

const getSingleService = async req => {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const service = await Service.findById(id);
    return service;
  } catch (err) {
    throw boom.boomify(err);
  }
};

const getCarsServices = async req => {
  try {
    const id = req.params === undefined ? req.id : req.params.id;
    const services = await Service.find({ car_id: id });
    return services;
  } catch (err) {
    throw boom.boomify(err);
  }
};

export default {
  getSingleService,
  getCarsServices
};
