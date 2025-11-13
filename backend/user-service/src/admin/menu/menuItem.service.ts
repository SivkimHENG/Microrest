import { producer } from "../../config/kafka";
import { MenuItemPublisher } from "../../events/publisher/menuItem.producer";
import { MenuItemCreatedEvent } from "../../utils/interface.utils";
import { v4 as uuidv4 } from "uuid";



export class MenuItemService {

  private publisher = new MenuItemPublisher(producer);

  async create(payload: any) {
    try {
      const event: MenuItemCreatedEvent = {
        eventId: uuidv4(),
        itemUuid: uuidv4(),
        id: payload.id,
        menuItem_name: payload.menuItem_name,
        description: payload.description,
        basePrice: payload.basePrice,
        imageUrl: payload.imageUrl,
        displayOrder: payload.displayOrder,
        isAvailable: payload.isAvailable,
        createdBy: "ADMIN",
        createdAt: new Date(),
        menuItemVariant: {
          menuItemVariantId: payload.menuItemVariantId,
          size_name: payload.size_name,
          priceAdjustment: payload.priceAdjustment
        },

        category: {
          categoryId: payload.categoryId,
          categoryUuid: uuidv4(),
          category_name: payload.category_name,
          description: payload.description
        },
        type: "MenuItemCreated"
      }


      await this.publisher.createMenuItem(event);
      return event;
    } catch (err: any) {
      console.error(`Failed to created ${err.message}`);
      throw err;
    }

  }


}

export const menuItemService = new MenuItemService();
