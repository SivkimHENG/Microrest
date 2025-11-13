"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItem = void 0;
const database_1 = require("../../database");
class MenuItem {
    async create() {
        try {
            const result = await database_1.prisma.$transaction(async (tx) => {
            });
            return result;
        }
        catch (err) {
        }
    }
    async update() { }
    async delete() { }
    async listMenu() { }
}
exports.MenuItem = MenuItem;
