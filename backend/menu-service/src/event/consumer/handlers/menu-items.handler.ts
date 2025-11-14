import { prisma } from "../../../database";



interface MenuItemCreatedEvent {
  eventId: string
  itemUuid: string
  id: number
  menuItem_name: string
  description: string
  basePrice: number
  imageUrl: string
  displayOrder: number
  isAvailable: boolean
  createdBy: string
  createdAt: Date

  menuItemVariant: {
    menuItemVariantId: number
    size_name: string
    priceAdjustment: number
  }

  category: {
    categoryId: number
    categoryUuid: string
    category_name: string
    description: string
  }
  type: "MenuItemCreated"

}

interface MenuItemUpdatedEvent {
  eventId: string
  itemUuid: string
  id: number
  menuItem_name: string
  description: string
  basePrice: number
  imageUrl: string
  displayOrder: number
  isAvailable: boolean
  updatedBy: string
  updatedAt: Date
  type: "MenuItemUpdated"

  menuItemVariant: {
    menuItemVariantId: number
    size_name: string
    priceAdjustment: number
  }

  category: {
    categoryId: number
    categoryUuid: string
    category_name: string
    description: string
  }

}



export class MenuItemHandler {

  async create(event: any) {

    try {
      const result = await prisma.$transaction(async (tx) => {
        const alreadyProcessed = await tx.proccessedEvent.findUnique({
          where: { eventId: event.eventId }
        });


        if (alreadyProcessed) {
          console.log(`Event ${event.eventId} alreadyProcessed, skipping.`)
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

    } catch (err: any) {
      console.error(err.message);
    }
  }

  async update(event: any) {
    try {

      const alreadyProcessed = await prisma.proccessedEvent.findUnique({
        where: { eventId: event.eventId }
      });

      if (alreadyProcessed) {
        console.log(`Event ${event.eventId} alreadyProcessed, skipping.`)
        return;
      }


      const category = await prisma.categories.findUnique({
        where: { id: event.category.categoryId }
      });

      if (!category) {
        console.log(`Category ${event.category.id} not found. Skipping.`);
        await prisma.proccessedEvent.create({
          data: { eventId: event.eventId }
        });
        return;
      }


      const existing = await prisma.menuItem.findUnique({
        where: { itemUuid: event.itemUuid }
      });


      if (!existing) {
        console.log(`Not found Menu Item : ${event.itemUuid} skipping`);
        await prisma.proccessedEvent.create({ data: { eventId: event.eventId } });
        return;
      }

      const menuItemVariant = await prisma.menuItemVariation.update({
        where: {
          id: event.menuItemVariant.menuItemVariantId
        },
        data: {
          size_name: event.menuItemVariant.size_name,
          priceAdjustment: event.menuItemVariant.priceAdjustment
        }
      });


      const menuItem = await prisma.menuItem.update({
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

      return { menuItem, menuItemVariant }


    } catch (err: any) {
      console.error(err.message);
      throw err;
    }
  }
  async delete(event: any) {
    try {
      const itemUuid = event.itemUuid;

      const alreadyProcessed = await prisma.proccessedEvent.findUnique({
        where: {
          eventId: event.eventId
        }
      });

      if (alreadyProcessed) {
        console.log(`Event ${event.eventId} alreadyProcessed, skipping`);
        return;

      }

      const existingMenuItem = await prisma.menuItem.findUnique({
        where: { itemUuid }
      });

      if (!existingMenuItem) {
        throw new Error(`MenuItem with ${itemUuid} not found`);
      }

      await prisma.menuItem.delete({
        where: { itemUuid }
      });

    } catch (err: any) {
      console.error(err.message);
      throw err;

    }



  }



}

export const menuItemHandler = new MenuItemHandler();
