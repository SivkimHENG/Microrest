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


export class MenuItemHandler {
  async create(event: any) {

    try {
      const alreadyProcessed = await prisma.proccessedEvent.findUnique({
        where: { eventId: event.eventId }
      });


      if (alreadyProcessed) {
        console.log(`Event ${event.eventId} alreadyProcessed, skipping.`)
        return;
      }


      const category = await prisma.categories.findUnique({
        where: {
          id: event.category.categoryId
        }

      });

      if (!category) {
        throw new Error(`Category ${event.category.categoryId} 
                              not found. Create category first!`);
      }

      const existing = await prisma.menuItem.findUnique({
        where: { menuItem_name: event.menuItem_name }
      });

      if (existing) {
        console.log(`MenuItem ${event.menuItem_name} already exists, skipping.`);
        await prisma.proccessedEvent.create({ data: { eventId: event.eventId } });
        return;
      }


      const result = await prisma.menuItem.create({
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


      await prisma.proccessedEvent.create({
        data: {
          eventId: event.eventId
        }
      });
      console.log(`Successfully processed event ${event.eventId},
                                    created menu item ${result.id}`);
      console.log(`Result : ${result.menuItem_name} `)
      return result;
    } catch (err: any) {
      console.error(err.message);
      throw err;
    }

  }
}

export const menuItemHandler = new MenuItemHandler();
