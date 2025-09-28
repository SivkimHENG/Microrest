from sqlalchemy.orm import Session
from typing import Dict
from db.model import (
    MenuItems,
    MenuItemsImage,
    MenuCategories,
    MenuItemsVariant,
    MenuItemsCombo,
    MenuItemsDiscount
)

from src.schemas.menu import( 
    MenuItemCreate,
    MenuCategoryCreate,
    MenuItemComboCreate
)

from fastapi import HTTPException


class MenuService:

    def __init__(self, db: Session):
        self.db = db

    def create_category(self, schema: MenuCategoryCreate) -> MenuCategories:
        category = MenuCategories(category_name=schema.category_name)
        self.db.add(category)
        self.db.commit()
        self.db.refresh(category)
        return category


    def list_category(self):
        return self.db.query(MenuCategories).all()

    def create_menu_items(self, schema: MenuItemCreate) -> MenuItems:
        item = MenuItems(
            name=schema.name,
            price=schema.price,
            description=schema.description,
            status=schema.status,
            category_id=schema.category_id,
        )

        for img in schema.images:
            item.images.append(MenuItemsImage(image_url=img.image_url))

        for variant in schema.variant:
            v = MenuItemsVariant(
                menu_size_name=variant.menu_size_name,
                price=variant.price,
            )

            for discount in schema.discount:
                v.discounts.append(MenuItemsDiscount(
                    discount_percent=discount.discount_percent
                ))

            item.variants.append(v)

        for combo_id in schema.combo_ids:
            combo = self.db.query(MenuItemsCombo).get(combo_id)
            if combo:
                item.combos.append(combo)

        self.db.add(item)
        self.db.commit()
        self.db.refresh(item)

        return item

    def update_menu_items(self, item_id: int, updates: Dict) -> MenuItems:
        item = self.db.query(MenuItems).filter(MenuItems.id == item_id).first()
        if not item:
            raise HTTPException(status_code=404, detail="Menu Item not found")
        for key, value in updates.items():
            if hasattr(item, key):
                setattr(item, key, value)

        self.db.commit()
        self.db.refresh(item)
        return item


    def get_menu_items(self, item_id: int) -> MenuItems:
        item = self.db.query(MenuItems).filter(MenuItems.id == item_id).first()
        if not item:
            raise HTTPException(status_code=404, detail="Menu Item not found")
        return item

    def list_menu_items(self):
        return self.db.query(MenuItems).all()

    def delete_menu_items(self, item_id: int):
        item = self.db.query(MenuItems).filter(MenuItems.id == item_id).first()
        if not item:
            raise HTTPException(status_code=404, detail="Menu Item not found")

        self.db.delete(item)
        self.db.commit()
        return {"deleted": True}

    def create_combo(self, schema: MenuItemsCombo) -> MenuItemsCombo:
        combo = MenuItemsCombo(name=schema.name,price=schema.price)
        for item_id in schema.item_ids:
            item = self.db.query(MenuItems).get(item_id)
            if item:
                combo.items.append(item)

        self.db.add(combo)
        self.db.commit()
        self.db.refresh(combo)
        return combo

    def list_combos(self):
        return self.db.query(MenuItemsCombo).all()

