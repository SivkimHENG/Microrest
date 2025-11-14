import { producer } from "../../config/kafka";
import { v4 as uuidv4 } from "uuid";
import { CategoryPublisher } from "../../events/publisher/category.producer";
import {
  CategoryCreatedEvent,
  CategoryDeletedEvent,
  CategoryUpdatedEvent
} from "../../utils/interface.utils";


class CategoryService {

  private publisher = new CategoryPublisher(producer);


  async createCategory(payload: any) {


    const event: CategoryCreatedEvent = {
      eventId: uuidv4(),
      categoryUuid: uuidv4(),
      category_name: payload.category_name,
      description: payload.description,
      createdBy: "ADMIN",
      createdAt: new Date(),
      updatedBy: "ADMIN",
      updatedAt: new Date(),
      type: "CategoryCreated"
    };


    await this.publisher.createCategory(event);
    return event;
  }

  async updateCategory(categoryUuid: string, payload: any) {

    const event: CategoryUpdatedEvent = {
      eventId: uuidv4(),
      categoryUuid: categoryUuid,
      category_name: payload.category_name,
      description: payload.description,
      updatedBy: "ADMIN",
      updatedAt: new Date(),
      type: "CategoryUpdated",
      changes: {
        before: payload.before,
        after: {
          category_name: payload.category_name,
          description: payload.description
        }
      }
    };


    await this.publisher.updateCategory(event);
    return event;
  }


  async deleteCategory(categoryUuid: string) {
    const event: CategoryDeletedEvent = {
      eventId: uuidv4(),
      categoryUuid: categoryUuid,
      deletedBy: "ADMIN",
      deletedAt: new Date(),
      type: "CategoryDeleted"
    }

    await this.publisher.deleteCategory(event);
    return event;

  }

}

export const categoryService = new CategoryService();
