import { fileURLToPath } from "url";
import { PrismaClient } from "../../generated/prisma";



export interface SearchStrategy<T = any> {
  search(
    prisma: PrismaClient,
    modelName: string,
    fieldName: string,
    query: string
  ): Promise<T[]>
}

export class ExactMatchStrategy<T = any> implements SearchStrategy<T> {
  async search(prisma: PrismaClient,
    modelName: string,
    fieldName: string,
    query: string): Promise<T[]> {
    const model = (prisma as any)[modelName];
    return await model.findMany({
      where: {
        [fieldName]: query
      }
    });
  }
}

