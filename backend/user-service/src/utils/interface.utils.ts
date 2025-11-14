
export interface CategoryData {
  category_name: string
  description: string
  updatedBy: string
  updatedAt: string
}

export interface CategoryUpdatedEvent {
  eventId: string
  categoryUuid: string
  category_name?: string
  description: string
  updatedBy: string
  updatedAt: Date
  type: "CategoryUpdated"
  changes: {
    before: Partial<CategoryData>,
    after: Partial<CategoryData>
  }
}

export interface CategoryCreatedEvent {
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

export interface CategoryDeletedEvent {
  eventId: string
  categoryUuid: string
  deletedBy: string
  deletedAt: Date
  type: "CategoryDeleted"
}


export interface MenuItemCreatedEvent {
  eventId: string
  itemUuid: string
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


export interface MenuItemUpdatedEvent {
  eventId: string
  itemUuid: string
  menuItem_name: string
  description: string
  basePrice: number
  imageUrl: string
  displayOrder: number
  isAvailable: boolean
  updatedBy: string
  updatedAt: Date
  type: "MenuItemUpdated"

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

}


export interface MenuItemDeletedEvent {
  eventId: string
  itemUuid: string
  deletedBy: string
  deletedAt: Date
  type: "MenuItemDeleted"
}


