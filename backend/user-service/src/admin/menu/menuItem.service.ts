import { producer } from "../../config/kafka";
import { MenuItemPublisher } from "../../events/publisher/menuItem.producer";
import { MenuItemCreatedEvent, MenuItemDeletedEvent, MenuItemUpdatedEvent } from "../../utils/interface.utils";
import { v4 as uuidv4 } from "uuid";


export class MenuItemService {

  private publisher = new MenuItemPublisher(producer);

  async create(payload: any) {
    try {
      const event: MenuItemCreatedEvent = {
        eventId: uuidv4(),
        itemUuid: uuidv4(),
        menuItem_name: payload.menuItem_name,
        description: payload.description,
        basePrice: payload.basePrice,
        imageUrl: payload.imageUrl,
        displayOrder: payload.displayOrder,
        isAvailable: payload.isAvailable,
        createdBy: "ADMIN",
        createdAt: new Date(),
        menuItemVariant: {
          menuItemVariantId: payload.menuItemVariant.menuItemVariantId,
          size_name: payload.menuItemVariant.size_name,
          priceAdjustment: payload.menuItemVariant.priceAdjustment
        },
        category: {
          categoryId: payload.category.categoryId,
          categoryUuid: uuidv4(),
          category_name: payload.category.category_name,
          description: payload.category.description
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



  async update(itemUuid: string, payload: any) {
    try {
      const event: MenuItemUpdatedEvent = {
        eventId: uuidv4(),
        itemUuid: itemUuid,
        menuItem_name: payload.menuItem_name,
        description: payload.description,
        basePrice: payload.basePrice,
        imageUrl: payload.imageUrl,
        displayOrder: payload.displayOrder,
        isAvailable: payload.isAvailable,
        updatedBy: "ADMIN",
        updatedAt: new Date(),
        menuItemVariant: {
          menuItemVariantId: payload.menuItemVariant.menuItemVariantId,
          size_name: payload.menuItemVariant.size_name,
          priceAdjustment: payload.menuItemVariant.priceAdjustment
        },
        category: {
          categoryId: payload.category.categoryId,
          categoryUuid: uuidv4(),
          category_name: payload.category.category_name,
          description: payload.category.description
        },
        type: "MenuItemUpdated"
      }

      await this.publisher.updateMenuItem(event);
      return event;

    } catch (err: any) {
      console.error(err.message);
      throw err;
    }

  }

  async delete(itemUuid: string) {
    try {
      const event: MenuItemDeletedEvent = {
        eventId: uuidv4(),
        itemUuid: itemUuid,
        deletedBy: "ADMIN",
        deletedAt: new Date(),
        type: "MenuItemDeleted"
      }
      await this.publisher.deleteMenuItem(event);

      return event;

    } catch (err: any) {
      console.error(err.message);
      throw err;
    }


  }

}

export const menuItemService = new MenuItemService();
