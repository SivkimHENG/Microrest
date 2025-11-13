"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuCategory = void 0;
const database_1 = require("../../database");
class Category {
    async create(data) {
        try {
            const result = await database_1.prisma.$transaction(async (tx) => {
                const category = await tx.category.create({
                    data: {
                        name: data.name,
                        description: data.description,
                        isActive: true,
                        displayOrder: data.displayOrder,
                        createdBy: data.createdBy,
                        updatedBy: data.updatedBy ?? null,
                    }
                });
                return { data: category };
            });
            return result;
        }
        catch (err) {
            console.error(err.message);
            throw err;
        }
    }
    async update() { }
    async delete() { }
    async list() { }
}
exports.menuCategory = new Category();
