import Customer from "../model/customer.model.js"


/**
 *  @param {Object} data
 */
export async function createCustomer(data) {

  return Customer.create(data);
}

export async function getCustomerById(customerId) {
  try {
    if (!customerId) return null;

    const customer = await Customer.findByPk(customerId);

    if (!customer) return null;

    const customerData = { ...customer.dataValues };

    return customerData;
  } catch (err) {
    console.error("Error fetching customer", err);
    return null;
  }
}

export async function softDeleteCustomerById(customerId) {

  try {
    if (!customerId) return null;
    const customer = await Customer.findByPk(customerId);
    if (!customer) return null;

    await customer.destroy();
    return true;

  } catch (err) {
    console.error("Error cannot soft deleting customer", err)
    return null;
  }
}

/**
 *  @param {number} customerId
 * 
 */
export async function getCustomerPhoneById(customerId) {

  try {
    if (!customerId) return null;

    const customer = await Customer.findByPk(customerId, {
      attributes: ["phone"]
    });

    if (!customer) {
      throw new Error("Cutomer not exist");
    }

    return customer.phone;


  } catch (err) {
    console.error(err);
    throw new Error("Failed to get customer phone", err)
  }

}




