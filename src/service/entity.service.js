const { exists, getModel } = require("../model/entity.model");

const insert = async (entityName, body) => {
  try {
    const Model = await getModel(entityName);
    return await Model.create(body);
  } catch (error) {
    console.log(error);
    throw new Error(`Erro no cadastro da entidade: ${entityName}.`);
  }
};

const list = async (
  entityName,
  query = {},
  resultsPerPage = 0,
  page = 0,
  fields = ""
) => {
  if (!exists(entityName)) throw new Error("Esta coleção não existe!");

  try {
    const Model = await getModel(entityName);
    const projection = fields ? fields.replaceAll(",", " ") : fields;

    return await Model.find(query)
      .select(projection)
      .skip(resultsPerPage * page)
      .limit(resultsPerPage);
  } catch (error) {
    throw new Error(
      `Não foi possível listar os itens da coleção: ${entityName}.`
    );
  }
};

const getById = async (entityName, id) => {
  try {
    const Model = await getModel(entityName);
    return await Model.findById(id);
  } catch (error) {
    console.log(error);
    throw new Error("Não existe item na coleção e com id mencionado.");
  }
};

const updateById = async (entityName, id, partialBody) => {
  if (!exists(entityName)) throw new Error("Esta coleção não existe!");

  try {
    const Model = await getModel(entityName);
    const updatedDocument = await Model.findByIdAndUpdate(id, partialBody, {
      new: true,
    });
    return updatedDocument;
  } catch (error) {
    throw new Error(
      `Erro ao atualizar o item com id ${id} na coleção: ${entityName}.`
    );
  }
};

module.exports = { insert, list, getById, updateById };
