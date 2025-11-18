"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuController = exports.MenuController = void 0;
const http_status_codes_1 = require("http-status-codes");
const menu_service_1 = require("./menu.service");
class MenuController {
    async searchMenuItem(req, res) {
        try {
            const { q } = req.query;
            if (!q || typeof (q) !== 'string') {
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
                    message: "Required search term"
                });
            }
            const items = await menu_service_1.menuService.searchMenuItems(q);
            if (!items || items.length === 0) {
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
                    message: "Menu items not found",
                });
            }
            return res.status(http_status_codes_1.StatusCodes.OK).json({
                success: true,
                data: items
            });
        }
        catch (err) {
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                message: "Failed to fetch data"
            });
        }
    }
    async searchCategory(req, res) {
        try {
            const { q } = req.query;
            if (!q || typeof (q) !== 'string') {
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
                    message: "Required search term"
                });
            }
            const category = await menu_service_1.menuService.searchCategory(q);
            if (!category || category.length === 0) {
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
                    message: "Category not found",
                    success: false
                });
            }
            return res.status(http_status_codes_1.StatusCodes.OK).json({
                success: true,
                data: category,
                count: category.length
            });
        }
        catch (err) {
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                message: "Failed to fetch data"
            });
        }
    }
    async searchMenuItemsByCategoryName(req, res) {
        try {
            const { category_name, q } = req.query;
            if (!category_name || typeof (category_name) !== 'string') {
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
                    message: "Required search term"
                });
            }
            if (!q || typeof (q) !== 'string') {
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
                    message: "Required search term"
                });
            }
            const items = await menu_service_1.menuService.searchMenuItemsByCategoryName(category_name, q);
            if (!items || items.length === 0) {
                return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
                    message: "Menu items not found",
                });
            }
            return res.status(200).json({
                success: true,
                data: items,
                count: items.length
            });
        }
        catch (err) {
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                message: "Failed to fetch data"
            });
        }
    }
    async listMenuItems(req, res) {
        try {
            const { isAvailable, categoryId, limit, offset } = req.query;
            const options = {};
            if (isAvailable !== undefined) {
                options.isAvailable = isAvailable === "true";
            }
            if (categoryId !== undefined) {
                const parsedId = parseInt(categoryId, 10);
                if (!isNaN(parsedId)) {
                    options.categoryId = parsedId;
                }
            }
            if (limit !== undefined) {
                options.limit = parseInt(limit, 10);
            }
            if (offset !== undefined) {
                options.offset = parseInt(offset, 10);
            }
            const items = await menu_service_1.menuService.listMenuItems(options);
            return res.status(http_status_codes_1.StatusCodes.OK).json({
                success: true,
                data: items,
                count: items?.length ?? 0
            });
        }
        catch (err) {
            return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "Failed to fetch menu items"
            });
        }
    }
    async listCategories(req, res) {
        try {
            const categories = await menu_service_1.menuService.listCategories();
            return res.status(http_status_codes_1.StatusCodes.OK).json({
                success: true,
                data: categories,
                count: categories?.length ?? 0
            });
        }
        catch (err) {
            console.error(`Controller error listCategories: ${err.message}`);
            return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: "Failed to fetch categories"
            });
        }
    }
}
exports.MenuController = MenuController;
exports.menuController = new MenuController();
