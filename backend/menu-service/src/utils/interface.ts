

export interface CategoryPayload {
  categoryUuid: string
  categoryId: number
  name: string
  description?: string
  displayOrder: number
  isActive: boolean
  createdAt: Date
  updatedAt: Date
  createdBy: string
  updatedBy: string
}


export interface MenuItemPayload {
  menuItemId: number
  price?: number
  imageUrl: string
  isActive: boolean
  isAvailable: boolean
}

export type MenuWithCategoryPayload = CategoryPayload & MenuItemPayload;


