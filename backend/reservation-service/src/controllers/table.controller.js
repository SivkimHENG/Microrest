import {
  createTable as createTableService,
  getTableById as getTableByIdService,
  getAvailableTable as getAvailableTableService,
  getTableCapacity as getTableCapacityService,
  listTable as listTableService,
  deleteTable as deleteTableService,
  updateTable as updateTableService
} from "../services/table.service.js";

import { StatusCodes } from "http-status-codes";
/**
 * @param {Request} req
 * @param {Response} res
 *
 * */
export async function createTable(req, res) {

  try {
    const tableData = req.body;
    const table = await createTableService(tableData);

    return res.status(StatusCodes.CREATED).json({
      message: "Table successfully created",
      data: table
    });


  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Failed to create table",
      error: err.message

    });
  }
}

/**
 * @param {Request} req
 * @param {Response} res
 * */
export async function getTableById(req, res) {
  try {

    const { id } = req.params;

    if (!id)
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Required id",
        data: []
      });

    const table = await getTableByIdService(id);

    if (!table)
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "Table not exist "
      });


    return res.status(StatusCodes.OK).json({
      message: "Table retrieved successfully ",
      data: table
    });
  } catch (err) {
    //console.log(err)
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Failed to create customer",
      error: err.message,
    });
  }

}

/**
 * @param {Request} req
 * @param {Response} res
 * @returns
 * */
export async function getAvailableTable(req, res) {

  try {
    const { id } = req.body;

    const table = await getAvailableTableService(id);

    if (!table)
      return res.status(StatusCodes.NOT_FOUND).json({ message: "table not exist" });

    return res.status(StatusCodes.OK).json({
      message: "Table availability retrieved successfully",
      data: table,
    });
  } catch (err) {
    //console.log(err)
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Failed to get table availability",
      error: err.message,
    });
  }

}

/**
 @param {Request}  req
 @param {Response} res
 @returns
**/
export async function getTableCapacity(req, res) {

  try {
    const { id } = req.params;
    const table = await getTableCapacityService(id);
    if (!table)
      return res.status(StatusCodes.NOT_FOUND).json({ message: "Table capacity not exist " });


    return res.status(StatusCodes.OK).json({
      message: "Table capacity retrieved successfully ",
      data: table
    });
  } catch (err) {
    //console.log(err)
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Failed to get table capacity",
      error: err.message
    });
  }

}

/**
 @param {Request}  req
 @param {Response}  res
**/

export async function listTable(req, res) {

  try {
    const { attributes } = req.query;
    const attrs = attributes ? attributes.split(",") : null;
    const tables = await listTableService(attrs);

    return res.status(StatusCodes.OK).json({
      message: "List successfully retrieved",
      data: tables
    });

  } catch (err) {
    //console.log(err)
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Failed to list Table ",
      error: err.message
    });
  }
}

/**
 @param {Request} req
 @param {Response} res
 @returns
**/
export async function deleteTable(req, res) {
  try {
    const { id } = req.params;

    const deleted = await deleteTableService(id);
    if (!deleted)
      return res.status(StatusCodes.NOT_FOUND).json({
        message: "table not exist",
      });


    return res.status(StatusCodes.OK).json({
      message: "Table successfully deleted",
    });


  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Failed to delete table",
      error: err.message
    });
  }

}


/**
 @param {Request} req
 @param {Response} res
**/
export async function updateTable(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;

    const updated = await updateTableService(id, data);

    if (!updated[0])
      res.status(StatusCodes.NOT_FOUND).json({
        message: "Table not exist"
      });


    return res.status(StatusCodes.OK).json({
      message: "Table successfully updated",
    });

  } catch (err) {
    console.log(err)
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Failed to updated Table",
      error: err.message
    });
  }
}





