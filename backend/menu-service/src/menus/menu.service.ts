import { PrismaClient } from "../../generated/prisma";
import { prisma } from "../database";



type MenuItemArray = Awaited<ReturnType<PrismaClient['menuItem']['findMany']>>
type CategoryArray = Awaited<ReturnType<PrismaClient['categories']['findMany']>>



// Customer need only this service for basic view all of the content
export class MenuService {


  async searchMenuItems(query: string): Promise<MenuItemArray | any> {
    try {
      const results = prisma.menuItem.findMany({
        where: {
          menuItem_name: {
            contains: query,
            mode: "insensitive",
          },
        }
      });

      if (!results) {
        throw new Error(`Menu Items not found ${results}`);
      }

      return results;
    } catch (err: any) {
      console.error(`Error Searching menu items: ${err.message}`);
    }
  }

  async searchCategory(query: string): Promise<CategoryArray | any> {
    try {
      const results = prisma.categories.findMany({
        where: {
          category_name: {
            contains: query,
            mode: "insensitive"
          }
        }
      });
      return results
    } catch (err: any) {
      console.error(`Error Searching category: ${err.message}`);
    }
  }


  async searchMenuItemsByCategoryName(category_name: string, query?: string):
    Promise<MenuItemArray | any> {
    try {
      const categories = await prisma.categories.findMany({
        where: {
          category_name: { contains: category_name, mode: "insensitive" }
        },
        select: { id: true }
      });

      const categoryIds = categories.map(cat => cat.id);
      if (categoryIds.length === 0) return [];

      const where: any = { categoryId: { in: categoryIds } };

      if (query) {
        where.OR = [
          {
            menuItem_name: {
              startsWith: query,
              mode: "insensitive"
            }
          },
          {
            menuItem_name: {
              contains: query,
              mode: "insensitive"
            }
          }
        ];
      }

      return await prisma.menuItem.findMany({
        where,
        include: {
          menuItemCategories: true,
        },
        orderBy: { description: 'asc' }
      });

    } catch (err: any) {
      console.error(`Error Searching menu with category: ${err.message}`);
    }

  }

  async listMenuItems(options?: {
    isAvailable: boolean,
    categoryId?: number,
    limit?: number,
    offset?: number
  }): Promise<MenuItemArray | any> {

    try {
      const where: any = {}

      if (options?.isAvailable !== undefined) {
        where.isAvailable = options.isAvailable;
      }
      if (options?.categoryId) {
        where.categoryId = options.categoryId;
      }


      return await prisma.menuItem.findMany({
        where,
        orderBy: { displayOrder: 'asc' },
        take: options?.limit,
        skip: options?.offset
      });

    } catch (err: any) {
      console.error(`Error listing menu items: ${err.message}`);
    }
  }

  async listCategories(): Promise<CategoryArray | any> {
    try {
      const result = await prisma.categories.findMany({
        orderBy: { category_name: "asc" },
        include: { menuItemCategories: true }
      });
      return result;
    } catch (err: any) {
      console.error(`Error listing categories: ${err.message}`);
    }
  }
}



export const menuService = new MenuService();
