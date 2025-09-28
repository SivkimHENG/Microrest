from fastapi import APIRouter, Depends, HTTPException
from services.menu_service import MenuService
from db.model import MenuItems
from db.session import get_db
from sqlalchemy.orm import Session
from schemas.menu import MenuItemRead

router = APIRouter(prefix="/api/v1/menus",tags=["menus"])



@router.post("/",response_model=MenuItemRead)
def createMenuItems(item: MenuService.create_menu_items, db: Session = Depends(get_db)):
    try:
        return MenuService.create_menu_items(
            name=item.name,
            price=item.price,
            description=item.description,
            category_id=item.category_id,
            status=item.status,
            image=item.image, variants=item.variants,
            combos=item.combos
        )
    finally:
        raise HTTPException(status_code=404, detail="Something went wrong")


@router.get("/",response_model=MenuItemRead)
def listMenuItems(item: MenuService.list_menu_items, db: Session = Depends(get_db)):
    try:
        return item
    finally:
        raise HTTPException(status_code=404,detail="Something went wrong")


@router.put("/{item_id}",response_model=MenuItemRead)
def updateMenuItems(item: MenuService.update_menu_items, db: Session = Depends(get_db):
    try:
        return item(
            name=item.name,
            price=item.price,
            description=item.description,
            category_id=item.category_id,
            status=item.status,
            image=item.image,
            variants=item.variants,
            combos=item.combos
        )

    finally:
        raise HTTPException(status_code=404,detail="Something went wrong")

@router.delete("/{item_id}",response_model=MenuItemRead)
def deleteMenuItems(item: MenuService, db: Session = Depends(get_db)):


@router.get("/menu-combo")
def listMenuCombo(item: MenuService, db: Session = Depends(get_db)):
    return MenuService.list_combos()


@router.post("/menu-combo")
def createMenuCombo(item: MenuService, db: Session = Depends(get_db)):




