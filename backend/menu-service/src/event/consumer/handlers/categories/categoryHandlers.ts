import { prisma } from "../../../../database";

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

interface CategoryData {
  category_name: string;
  description: string;
  updatedBy: string;
  updatedAt: string;
}

interface CategoryUpdatedEvent {
  eventId: string
  categoryId: number
  categoryUuid?: string
  category_name?: string
  description: string
  updatedBy: string
  updatedAt: Date
  type: "CategoryUpdated",
  changes: {
    before: Partial<CategoryData>
    after: Partial<CategoryData>
  }
}


class CategoryHandlers {

  async create(event: CategoryCreatedEvent) {
    try {
      const alreadyProcessed = await prisma.proccessedEvent.findUnique({
        where: { eventId: event.eventId }
      });


      if (alreadyProcessed) {
        console.log(`Event ${event.eventId} alreadyProcessed, skipping.`)
        return;
      }
      const result = await prisma.categories.create({
        data: {
          categoryUuid: event.categoryUuid,
          category_name: event.category_name,
          description: event.description,
          createdBy: event.createdBy,
          updatedBy: event.updatedBy,
        }
      });

      await prisma.proccessedEvent.create({
        data: {
          eventId: event.eventId
        }
      });
      return result;
    } catch (err: any) {
      console.error(err.message);
      throw err;
    }

  }

  async update(event: any) {
    try {
      const categoryId = Number(event.id);

      const alreadyProcessed = await prisma.proccessedEvent.findUnique({
        where: { eventId: event.eventId }
      });


      if (alreadyProcessed) {
        console.log(`Event ${event.eventId} alreadyProcessed, skipping.`)
        return;
      }

      const existingCatgory = await prisma.categories.findUnique({
        where: { id: categoryId }
      });


      if (!existingCatgory) {
        throw new Error(`Category with id ${categoryId} not found`);
      }

      const result = await prisma.categories.update({
        where: { id: categoryId },
        data: {
          category_name: event.category_name,
          description: event.description,
          updatedBy: event.updatedBy,
          updatedAt: new Date(event.updatedAt)
        }

      });
      return result;
    } catch (err: any) {
      console.error(err.message);
      throw err;
    }

  }

  async delete(event: any) {
    try {
      const categoryId = Number(event.id);

      const alreadyProcessed = await prisma.proccessedEvent.findUnique({
        where: { eventId: event.eventId }
      });


      if (alreadyProcessed) {
        console.log(`Event ${event.eventId} alreadyProcessed, skipping.`)
        return;
      }

      const existingCatgory = await prisma.categories.findUnique({
        where: { id: categoryId }
      });


      if (!existingCatgory) {
        throw new Error(`Category with id ${categoryId} not found`);
      }

      await prisma.categories.delete({
        where: { id: categoryId },
      });

    } catch (err: any) {
      console.error(err.message);
      throw err;
    }
  }

}


export const categoryHandlers = new CategoryHandlers();
