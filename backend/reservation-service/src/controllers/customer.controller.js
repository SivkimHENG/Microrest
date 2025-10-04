import { 
  createCustomer as createCustomerService,
  getCustomerById as getCustomerByIdService,
  softDeleteCustomerById as softDeleteCustomerByIdService,
  getCustomerPhoneById as getCustomerPhoneByIdService
} from "../services/customer.service.js";

export async function createCustomer(req, res) {
  try {
    const customerData = req.body;
    const customer = await createCustomerService(customerData);

    return res.status(201).json({
      message: "Customer successfully created",
      data: customer,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Failed to create customer",
      error: err.message,
    });
  }
}

export async function getCustomerById(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Customer ID is required" });
    }

    const customer = await getCustomerByIdService(id);
    if (!customer) {
      return res.status(404).json({
        message: "Customer not found",
        data: [],
      });
    }

    return res.status(200).json({
      message: `Customer details for ID ${id}`,
      data: customer,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Failed to get customer",
      error: err.message,
    });
  }
}

export async function softDeleteCustomer(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Customer ID is required" });
    }

    const deleted = await softDeleteCustomerByIdService(id);
    if (!deleted) {
      return res.status(404).json({ message: "Customer not found" });
    }

    return res.status(202).json({
      message: "Customer successfully deleted (soft)",
      data: deleted,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Failed to soft delete customer",
      error: err.message,
    });
  }
}

export async function getCustomerPhoneById(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Customer ID is required" });
    }

    const phone = await getCustomerPhoneByIdService(id);
    if (!phone) {
      return res.status(404).json({
        message: `Customer phone not found for ID ${id}`,
        data: [],
      });
    }

    return res.status(200).json({
      message: `Customer phone retrieved successfully for ID ${id}`,
      data: phone,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Failed to fetch customer phone",
      error: err.message,
    });
  }
}

