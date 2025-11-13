"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuCategoryController = void 0;
const http_status_codes_1 = require("http-status-codes");
const category_admin_service_1 = require("./admin/category-admin.service");
class MenuCategoryController {
    async create(req, res) {
        try {
            const data = req.body;
            if (!data) {
                console.log("data error");
            }
            const created = await category_admin_service_1.menuCategory.create(data);
        }
        catch (err) {
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({});
        }
    }
}
exports.MenuCategoryController = MenuCategoryController;
