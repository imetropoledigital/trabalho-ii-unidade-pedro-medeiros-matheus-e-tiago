const service = require("../service/entity.service");

const insert = async (req, res) => {
  try {
    const entityName = req.params.entity;

    const result = await service.insert(entityName, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const entityName = req.params.entity;

    const result = await service.getAll(entityName);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { entity, id } = req.params;

    const result = await service.getById(entity, id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateById = async (req, res) => {
  try {
    const { entity, id } = req.params;

    const result = await service.updateById(entity, id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { insert, getAll, getById, updateById };
