"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuItemHandler = exports.MenuItemHandler = void 0;
const database_1 = require("../../../database");
class MenuItemHandler {
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
                if (!event.category?.categoryId) {
                    console.log(`Event ${event.eventId} missing categoryUuid, skipping.`);
                    await tx.proccessedEvent.create({
                        data: { eventId: event.eventId }
                    });
                    return;
                }
                const category = await tx.categories.findUnique({
                    where: { id: event.category.categoryId }
                });
                if (!category) {
                    console.log(`Category ${event.category.id} not found. Skipping.`);
                    await tx.proccessedEvent.create({
                        data: { eventId: event.eventId }
                    });
                    return;
                }
                const existing = await tx.menuItem.findUnique({
                    where: { itemUuid: event.itemUuid }
                });
                if (existing) {
                    console.log(`MenuItem ${event.itemUuid} already exists, skipping.`);
                    await tx.proccessedEvent.create({
                        data: { eventId: event.eventId }
                    });
                    return existing;
                }
                const menuItem = await tx.menuItem.create({
                    data: {
                        itemUuid: event.itemUuid,
                        menuItem_name: event.menuItem_name,
                        description: event.description,
                        basePrice: event.basePrice,
                        imageUrl: event.imageUrl,
                        displayOrder: event.displayOrder,
                        isAvailable: true,
                        categoryId: category.id,
                        createdBy: event.createdBy,
                        menuItemVariant: {
                            create: {
                                size_name: event.menuItemVariant.size_name,
                                priceAdjustment: event.menuItemVariant.priceAdjustment,
                            }
                        },
                        menuItemCategories: {
                            create: {
                                categoryId: category.id
                            }
                        }
                    },
                    include: {
                        menuItemVariant: true,
                        menuItemCategories: {
                            include: {
                                category: true
                            }
                        }
                    }
                });
                await tx.proccessedEvent.create({
                    data: {
                        eventId: event.eventId
                    }
                });
                console.log(`Successfully processed event ${event.eventId}`);
                return menuItem;
            });
            return result;
        }
        catch (err) {
            console.error(err.message);
        }
    }
    async update(event) {
        try {
            const alreadyProcessed = await database_1.prisma.proccessedEvent.findUnique({
                where: { eventId: event.eventId }
            });
            if (alreadyProcessed) {
                console.log(`Event ${event.eventId} alreadyProcessed, skipping.`);
                return;
            }
            const category = await database_1.prisma.categories.findUnique({
                where: { id: event.category.categoryId }
            });
            if (!category) {
                console.log(`Category ${event.category.id} not found. Skipping.`);
                await database_1.prisma.proccessedEvent.create({
                    data: { eventId: event.eventId }
                });
                return;
            }
            const existing = await database_1.prisma.menuItem.findUnique({
                where: { itemUuid: event.itemUuid }
            });
            if (!existing) {
                console.log(`Not found Menu Item : ${event.itemUuid} skipping`);
                await database_1.prisma.proccessedEvent.create({ data: { eventId: event.eventId } });
                return;
            }
            const menuItemVariant = await database_1.prisma.menuItemVariation.update({
                where: {
                    id: event.menuItemVariant.menuItemVariantId
                },
                data: {
                    size_name: event.menuItemVariant.size_name,
                    priceAdjustment: event.menuItemVariant.priceAdjustment
                }
            });
            const menuItem = await database_1.prisma.menuItem.update({
                where: {
                    itemUuid: event.itemUuid,
                },
                data: {
                    categoryId: category.id,
                    menuItem_name: event.menuItem_name,
                    description: event.description,
                    basePrice: event.basePrice,
                    imageUrl: event.imageUrl,
                    displayOrder: event.displayOrder,
                    updatedBy: event.updatedBy,
                }
            });
            console.log(`Successfully updating ${menuItem.menuItem_name}`);
            return { menuItem, menuItemVariant };
        }
        catch (err) {
            console.error(err.message);
            throw err;
        }
    }
    async delete(event) {
        try {
            const itemUuid = event.itemUuid;
            const alreadyProcessed = await database_1.prisma.proccessedEvent.findUnique({
                where: {
                    eventId: event.eventId
                }
            });
            if (alreadyProcessed) {
                console.log(`Event ${event.eventId} alreadyProcessed, skipping`);
                return;
            }
            const existingMenuItem = await database_1.prisma.menuItem.findUnique({
                where: { itemUuid }
            });
            if (!existingMenuItem) {
                throw new Error(`MenuItem with ${itemUuid} not found`);
            }
            await database_1.prisma.menuItem.delete({
                where: { itemUuid }
            });
        }
        catch (err) {
            console.error(err.message);
            throw err;
        }
    }
}
exports.MenuItemHandler = MenuItemHandler;
exports.menuItemHandler = new MenuItemHandler();
