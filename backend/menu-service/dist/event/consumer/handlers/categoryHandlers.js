"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryHandlers = void 0;
const database_1 = require("../../../database");
//TODO: DONE 
class CategoryHandlers {
    async create(event) {
        try {
            const result = await database_1.prisma.$transaction(async (tx) => {
                const alreadyProcessed = await tx.proccessedEvent.findUnique({
                    where: { eventId: event.eventId }
                });
                if (alreadyProcessed) {
                    console.log(`Event ${event.eventId} alreadyProcessed, skipping.`);
                    return;
                }
                const category = await tx.categories.findUnique({
                    where: { categoryUuid: event.categoryUuid }
                });
                if (!category) {
                    console.log("Category not found");
                }
                const categories = await tx.categories.create({
                    data: {
                        categoryUuid: event.categoryUuid,
                        category_name: event.category_name,
                        description: event.description,
                        createdBy: event.createdBy,
                        updatedBy: event.updatedBy,
                    }
                });
                await tx.proccessedEvent.create({
                    data: {
                        eventId: event.eventId
                    }
                });
                return { categories };
            });
            return result;
        }
        catch (err) {
            console.error(err.message);
        }
    }
    async update(event) {
        try {
            const categoryUuid = event.categoryUuid;
            const alreadyProcessed = await database_1.prisma.proccessedEvent.findUnique({
                where: { eventId: event.eventId }
            });
            if (alreadyProcessed) {
                console.log(`Event ${event.eventId} alreadyProcessed, skipping.`);
                return;
            }
            const existingCatgory = await database_1.prisma.categories.findUnique({
                where: { categoryUuid: event.categoryUuid }
            });
            if (!existingCatgory) {
                throw new Error(`Category with id ${categoryUuid} not found`);
            }
            const result = await database_1.prisma.categories.update({
                where: { categoryUuid },
                data: {
                    category_name: event.category_name,
                    description: event.description,
                    updatedBy: event.updatedBy,
                    updatedAt: new Date(event.updatedAt)
                }
            });
            return result;
        }
        catch (err) {
            console.error(err.message);
            throw err;
        }
    }
    async delete(event) {
        try {
            const categoryUuid = event.categoryUuid;
            const alreadyProcessed = await database_1.prisma.proccessedEvent.findUnique({
                where: { eventId: event.eventId }
            });
            if (alreadyProcessed) {
                console.log(`Event ${event.eventId} alreadyProcessed, skipping.`);
                return;
            }
            const existingCatgory = await database_1.prisma.categories.findUnique({
                where: { categoryUuid }
            });
            if (!existingCatgory) {
                throw new Error(`Category with  ${categoryUuid} not found`);
            }
            await database_1.prisma.categories.delete({
                where: { categoryUuid },
            });
        }
        catch (err) {
            console.error(err.message);
            throw err;
        }
    }
}
exports.categoryHandlers = new CategoryHandlers();
