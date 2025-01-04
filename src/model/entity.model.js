const mongoose = require("mongoose");

const getModel = async (name) => {
  const collectionExists = await exists(name);
  if (!collectionExists) {
    const entity = new mongoose.Schema({}, { strict: false });
    return mongoose.model(name, entity);
  }
  return mongoose.model(name);
};

const exists = async (name) => mongoose.modelNames().includes(name);

module.exports = { getModel, exists };
