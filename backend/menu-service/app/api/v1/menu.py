from fastapi import APIRouter,Depends


router = APIRouter()


@router.get("/",response_class=list[])
def list_menus(db:Session =  )
