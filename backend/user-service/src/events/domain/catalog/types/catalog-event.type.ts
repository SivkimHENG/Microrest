export interface CategoryCreatedEvent {
  type: 'CategoryCreated';
  categoryUuid: string;
  categoryId: number;
  category_name: string;
  description?: string;
  isActive: boolean;
  createdAt: Date;
  createdBy: string;
}

export interface CategoryUpdatedEvent {
  type: 'CategoryUpdated';
  categoryUuid: string;
  categoryId: number;
  category_name?: string;
  description?: string;
  parentCategoryId?: number;
  displayOrder?: number;
  isActive?: boolean;
  updatedAt: Date;
}

export interface CategoryDeletedEvent {
  type: 'CategoryDeleted';
  categoryUuid: string;
  deletedAt: Date;
}




export interface MenuItemCreatedEvent {
  type: "MenuItemCreated"
  itemUuid: string;
  menuItemId: number;
  menuItem_name: string;
  description?: string;
  basePrice: number;
  displayOrder: number
  isAvailable: boolean;
  imageUrl?: string;
  createdAt: Date;
  createdBy: string

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

export interface MenuItemUpdatedEvent {
  type: 'MenuItemUpdated';
  itemUuid: string;
  id: number;
  menuItem_name: string
  description: string
  basePrice: number
  imageUrl: string
  displayOrder: number
  isAvailable: boolean
  updatedBy: string
  updatedAt: Date
  menuItemVariant: {
    menuItemVariantId: number
    size_name: string
    priceAdjustment: number
  }

  category: {
    categoryId: number
    categoryUuid: string
  }
}

export interface MenuItemDeletedEvent {
  type: 'MenuItemDeleted';
  itemUuid: string;
  deletedAt: Date;
}

export type CatalogEvent =
  | CategoryCreatedEvent
  | CategoryUpdatedEvent
  | CategoryDeletedEvent
  | MenuItemCreatedEvent
  | MenuItemUpdatedEvent
  | MenuItemDeletedEvent;
