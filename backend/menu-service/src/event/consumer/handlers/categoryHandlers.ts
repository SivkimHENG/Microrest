import { prisma } from "../../../database"

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

//TODO: DONE 
class CategoryHandlers {

  async create(event: CategoryCreatedEvent) {
    try {

      const result = await prisma.$transaction(async (tx) => {

        const alreadyProcessed = await tx.proccessedEvent.findUnique({
          where: { eventId: event.eventId }
        });

        if (alreadyProcessed) {
          console.log(`Event ${event.eventId} alreadyProcessed, skipping.`)
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
        return { categories }
      })

      return result;


    } catch (err: any) {
      console.error(err.message);
    }

  }

  async update(event: any) {
    try {
      const categoryUuid = event.categoryUuid;

      const alreadyProcessed = await prisma.proccessedEvent.findUnique({
        where: { eventId: event.eventId }
      });


      if (alreadyProcessed) {
        console.log(`Event ${event.eventId} alreadyProcessed, skipping.`)
        return;
      }

      const existingCatgory = await prisma.categories.findUnique({
        where: { categoryUuid: event.categoryUuid }
      });


      if (!existingCatgory) {
        throw new Error(`Category with id ${categoryUuid} not found`);
      }

      const result = await prisma.categories.update({
        where: { categoryUuid },
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
      const categoryUuid = event.categoryUuid;

      const alreadyProcessed = await prisma.proccessedEvent.findUnique({
        where: { eventId: event.eventId }
      });


      if (alreadyProcessed) {
        console.log(`Event ${event.eventId} alreadyProcessed, skipping.`)
        return;
      }

      const existingCatgory = await prisma.categories.findUnique({
        where: { categoryUuid }
      });


      if (!existingCatgory) {
        throw new Error(`Category with  ${categoryUuid} not found`);
      }

      await prisma.categories.delete({
        where: { categoryUuid },
      });

    } catch (err: any) {
      console.error(err.message);
      throw err;
    }
  }

}


export const categoryHandlers = new CategoryHandlers();
