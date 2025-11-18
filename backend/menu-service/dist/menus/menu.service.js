"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuService = exports.MenuService = void 0;
const database_1 = require("../database");
// Customer need only this service for basic view all of the content
class MenuService {
    async searchMenuItems(query) {
        try {
            const results = database_1.prisma.menuItem.findMany({
                where: {
                    menuItem_name: {
                        contains: query,
                        mode: "insensitive",
                    },
                }
            });
            if (!results) {
                throw new Error(`Menu Items not found ${results}`);
            }
            return results;
        }
        catch (err) {
            console.error(`Error Searching menu items: ${err.message}`);
        }
    }
    async searchCategory(query) {
        try {
            const results = database_1.prisma.categories.findMany({
                where: {
                    category_name: {
                        contains: query,
                        mode: "insensitive"
                    }
                }
            });
            return results;
        }
        catch (err) {
            console.error(`Error Searching category: ${err.message}`);
        }
    }
    async searchMenuItemsByCategoryName(category_name, query) {
        try {
            const categories = await database_1.prisma.categories.findMany({
                where: {
                    category_name: { contains: category_name, mode: "insensitive" }
                },
                select: { id: true }
            });
            const categoryIds = categories.map(cat => cat.id);
            if (categoryIds.length === 0)
                return [];
            const where = { categoryId: { in: categoryIds } };
            if (query) {
                where.OR = [
                    {
                        menuItem_name: {
                            startsWith: query,
                            mode: "insensitive"
                        }
                    },
                    {
                        menuItem_name: {
                            contains: query,
                            mode: "insensitive"
                        }
                    }
                ];
            }
            return await database_1.prisma.menuItem.findMany({
                where,
                include: {
                    menuItemCategories: true,
                },
                orderBy: { description: 'asc' }
            });
        }
        catch (err) {
            console.error(`Error Searching menu with category: ${err.message}`);
        }
    }
    async listMenuItems(options) {
        try {
            const where = {};
            if (options?.isAvailable !== undefined) {
                where.isAvailable = options.isAvailable;
            }
            if (options?.categoryId) {
                where.categoryId = options.categoryId;
            }
            return await database_1.prisma.menuItem.findMany({
                where,
                orderBy: { displayOrder: 'asc' },
                take: options?.limit,
                skip: options?.offset
            });
        }
        catch (err) {
            console.error(`Error listing menu items: ${err.message}`);
        }
    }
    async listCategories() {
        try {
            const result = await database_1.prisma.categories.findMany({
                orderBy: { category_name: "asc" },
                include: { menuItemCategories: true }
            });
            return result;
        }
        catch (err) {
            console.error(`Error listing categories: ${err.message}`);
        }
    }
}
exports.MenuService = MenuService;
exports.menuService = new MenuService();
