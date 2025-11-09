"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerController = void 0;
const customer_service_1 = require("./customer.service");
const http_status_codes_1 = require("http-status-codes");
class CustomerController {
    async getProfile(req, res) {
        try {
            const { payload } = req.body;
            const { userUuid } = req.params;
            const meta = {
                ipAdress: req.ip || "0.0.0.0",
                userAgent: req.get('User-Agent') || 'unknown',
            };
            if (!userUuid) {
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
                    message: "required user uuid"
                });
            }
            const profile = await customer_service_1.customerService.getProfile(userUuid, payload, meta);
            return res.status(http_status_codes_1.StatusCodes.OK).json({
                message: "successfully get Profile",
                data: profile
            });
        }
        catch (err) {
            console.error(err);
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                message: "failed to get Profile",
                error: err.message
            });
        }
    }
    async updateProfile(req, res) {
        try {
            const { data } = req.body;
            const { userUuid } = req.params;
            const meta = {
                ipAdress: req.ip || "0.0.0.0",
                userAgent: req.get('User-Agent') || 'unknown',
            };
            if (!userUuid) {
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
                    message: "required user uuid"
                });
            }
            const updated = await customer_service_1.customerService.updateProfile(userUuid, data, meta);
            return res.status(http_status_codes_1.StatusCodes.OK).json({
                message: "User updated their profiles successfully",
                data: updated,
            });
        }
        catch (err) {
            console.error(err.message);
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                message: "Failed to updating profile",
                error: err.message
            });
        }
    }
}
exports.customerController = new CustomerController();
