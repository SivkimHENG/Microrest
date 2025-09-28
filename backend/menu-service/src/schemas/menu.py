from typing import List, Optional
from pydantic import BaseModel, Field




## Category
class MenuCategoryRead(BaseModel):
    id: int

    class Config:
        orm_mode = True

class MenuCategoryCreate(BaseModel):
    category_name: str

class MenuCategoryUpdate(BaseModel):
    category_name: Optional[str] = None



## Image 
class MenuItemImageRead(BaseModel):
    id: int

    class Config:
        orm_mode = True

class MenuItemImageCreate(BaseModel):
    image_url: str

class MenuItemImageUpdate(BaseModel):
    image_url: Optional[str] = None


class MenuItemDiscountRead(BaseModel):
    id: int

    class Config:
        orm_mode = True


class MenuItemDiscountCreate(BaseModel):
    discount_percent: float = 0.0

class MenuItemDiscountUpdate(BaseModel):
    discount_percent: Optional[float] = None



class MenuItemVariantRead(BaseModel):
    id: int
    price: float
    discount: List[MenuItemDiscountRead] = []


    class Config:
        orm_mode = True

class MenuItemVariantCreate(BaseModel):
    menu_size_name: str
    price: float
    discount: Optional[List[MenuItemDiscountCreate]] = []

class MenuItemVariantUpdate(BaseModel):
    menu_size_name: Optional[str] = None
    price: Optional[float] = None
    discount: Optional[List[MenuItemDiscountCreate]] = []



class MenuItemComboRead(BaseModel):
    id: int

    class Config:
        orm_mode = True

class MenuItemComboCreate(BaseModel):
    name: str
    price: float
    item_ids: List[int] = []

class MenuItemComboUpdate(BaseModel):
    name: Optional[str] = None
    price: Optional[float] = None
    item_ids: List[int] = []




class MenuItemRead(BaseModel):
    name: Optional[str] = None
    price: Optional[float] = None
    description: Optional[str] = None
    status: Optional[bool] = True
    category_id: Optional[int] = None
    image: Optional[List[MenuItemImageRead]] = []
    variant: Optional[List[MenuItemVariantRead]] = []
    discount: Optional[List[MenuItemDiscountRead]] = []
    combo_ids: Optional[List[int]] = None


class MenuItemCreate(BaseModel):
    name: str
    price: float
    description: str
    status: bool = True
    category_id: int
    images: Optional[List[MenuItemImageCreate]] = []
    variant: Optional[List[MenuItemVariantCreate]] = []
    discount: Optional[List[MenuItemDiscountCreate]] = []
    combo_ids: Optional[List[int]] = []


class MenuItemUpdate(BaseModel):
    name: Optional[str] = None
    price: Optional[float] = None
    description: Optional[str] = None
    status: Optional[bool] = True
    category_id: Optional[int] = None
    images: Optional[List[MenuItemImageCreate]] = []
    variant: Optional[List[MenuItemVariantCreate]] = []
    discount: Optional[List[MenuItemDiscountCreate]] = []
    combo_ids: Optional[List[int]] = []
