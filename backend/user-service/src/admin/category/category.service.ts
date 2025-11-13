import { producer } from "../../config/kafka";
import { v4 as uuidv4 } from "uuid";
import { CategoryPublisher } from "../../events/publisher/category.producer";

interface CategoryData {
  category_name: string;
  description: string;
  updatedBy: string;
  updatedAt: string;
}
interface CategoryUpdatedEvent {
  id: number
  eventId: string
  categoryUuid: string
  category_name?: string
  description: string
  updatedBy: string
  updatedAt: Date
  type: "CategoryUpdated"
  changes: {
    before: Partial<CategoryData>
    after: Partial<CategoryData>

  }
}

interface CategoryCreatedEvent {
  eventId: string
  categoryUuid: string
  category_name?: string
  description: string
  createdBy: string
  createdAt: Date
  updatedBy: string
  updatedAt: Date
  type: "CategoryCreated"
}


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

  async updateCategory(categoryId: number, payload: any) {

    const event: CategoryUpdatedEvent = {
      eventId: uuidv4(),
      id: categoryId,
      categoryUuid: payload.categoryUuid,
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





}

export const categoryService = new CategoryService();
