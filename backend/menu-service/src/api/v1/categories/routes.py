from fastapi import APIRouter,Depends,HTTPException
from schemas.menu import MenuCategoryRead
from sqlalchemy.orm import Session
from db.session import get_db

from services.menu_service import MenuService

router  = APIRouter(prefix="/api/v1/categories",tags=["categories"])


@router.post("/",response_model=MenuCategoryRead)
def createCategories(cat: MenuService ,db: Session = Depends(get_db)):
    try:
        return MenuService.create_category(
            category_name=cat.category_name
        )
    finally:
        raise HTTPException(status_code=404,detail="Something went wrong")


@router.get("/",response_model=MenuCategoryRead)
def listCategory(cat : MenuService, db: Session = Depends(get_db)):

