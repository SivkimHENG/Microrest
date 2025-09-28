from sqlalchemy import Column, Integer, String, ForeignKey, Boolean, Float, Table
from sqlalchemy.orm import relationship
from src.db.base import Base


menu_items_combo_links = Table(
    "menu_items_combo_links",
    Base.metadata,
    Column("combo_id", Integer, ForeignKey("menu_items_combos.id"), 
           primary_key=True),
    Column("menu_item_id", Integer, ForeignKey("menu_items.id"),
           primary_key=True),
)


class MenuItems(Base):
    __tablename__ = "menu_items"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    price = Column(Float, nullable=False)  # Removed unique=True
    description = Column(String, nullable=False)

    category_id = Column(Integer, ForeignKey("menu_categories.id"))
    category = relationship("MenuCategories", back_populates="menu_items")

    status = Column(Boolean, nullable=False, default=True)

    images = relationship("MenuItemsImage", back_populates="menu_item", cascade="all, delete-orphan")
    variants = relationship("MenuItemsVariant", back_populates="menu_item", cascade="all, delete-orphan")
    combos = relationship("MenuItemsCombo", secondary=menu_items_combo_links, back_populates="items")


class MenuCategories(Base):
    __tablename__ = "menu_categories"

    id = Column(Integer, primary_key=True, index=True)
    category_name = Column(String, nullable=False)

    menu_items = relationship("MenuItems", back_populates="category", cascade="all, delete-orphan")


class MenuItemsImage(Base):
    __tablename__ = "menu_items_images"

    id = Column(Integer, primary_key=True, index=True)
    menu_item_id = Column(Integer, ForeignKey("menu_items.id"))
    image_url = Column(String, nullable=False)

    menu_item = relationship("MenuItems", back_populates="images")


class MenuItemsVariant(Base):
    __tablename__ = "menu_items_variants"

    id = Column(Integer, primary_key=True, index=True)
    menu_item_id = Column(Integer, ForeignKey("menu_items.id"))
    menu_item = relationship("MenuItems", back_populates="variants")

    menu_size_name = Column(String, nullable=False)
    price = Column(Float, nullable=False)

    discounts = relationship("MenuItemsDiscount", back_populates="menu_item_variant", cascade="all, delete-orphan")


class MenuItemsDiscount(Base):
    __tablename__ = "menu_items_discounts"

    id = Column(Integer, primary_key=True, index=True)
    menu_item_variant_id = Column(Integer, ForeignKey("menu_items_variants.id"))

    discount_percent = Column(Float, nullable=False, default=0.0)
    menu_item_variant = relationship("MenuItemsVariant", back_populates="discounts")


class MenuItemsCombo(Base):
    __tablename__ = "menu_items_combos"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    price = Column(Float, nullable=False)

    items = relationship("MenuItems", secondary=menu_items_combo_links, back_populates="combos")

