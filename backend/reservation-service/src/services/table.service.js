import Table from "../model/table.model.js"


/**
 * @param {JSON} data
 */
export async function createTable(data) {
  return Table.create(data);
}

/**
 *  @param {number} tableId
 */
export async function getTableById(tableId) {
  if (!tableId) return null;

  const table = await Table.findByPk(tableId);
  return table ? table.get({ plain: true }) : null;
}

/**
 @param {[]} attributes
**/
export async function listTable(attributes = null) {
  return Table.findAll({
    attributes: attributes?.length ? attributes : undefined
  });
}

/** 
 * @param {number} tableId
 * @returns 
 */
export async function getAvailableTable(tableId) {
  if (!tableId) return null;

  const table = await Table.findByPk(tableId, {
    attributes: ['isAvailable']
  });

  return table;
}

/** 
 * @param {number} tableId
 */
export async function getTableCapacity(tableId) {

  if (!tableId) return null;

  const table = await Table.findByPk(tableId, {
    attributes: ["capacity"]
  });

  return table;
}

/**
  @param {number} tableId
  @returns
 **/
export async function deleteTable(tableId) {
  if (!tableId) return 0;
  return Table.destroy({ where: { id: tableId } });

}

/**
 @param {number} tableId
 @param {string} updateData
**/
export async function updateTable(tableId, updateData) {

  if (!tableId) return null;

  return Table.update(updateData, {
    where: {
      id: tableId
    }
  });

}

