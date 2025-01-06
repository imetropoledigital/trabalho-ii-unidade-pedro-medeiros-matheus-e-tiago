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

const list = async (req, res) => {
  try {
    const entityName = req.params.entity;
    let { query, limit, page, fields } = req.query;

    query = query ? JSON.parse(query) : null;
    limit = limit ? Number(limit) : null;
    page = page ? Number(page) : null;

    const result = await service.list(entityName, query, limit, page, fields);
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

module.exports = { insert, list, getById, updateById };
