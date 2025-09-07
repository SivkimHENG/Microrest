from sqlalchemy import Column, Integer, String,DECIMAL
from src.db.base import Base

class MenuItems(Base):
    __tablename__ = "menu_items"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    price = Column(DECIMAL, unique=True, index=True, nullable=False)
    description = Column(String, nullable=False)
