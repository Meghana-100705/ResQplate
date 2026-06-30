from fastapi import APIRouter

from app.database import db

router=APIRouter()


@router.get("/dashboard")

def dashboard():

    docs=db.collection("donations").stream()

    total=0

    meals=0

    completed=0

    for doc in docs:

        item=doc.to_dict()

        total+=1

        meals+=item["quantity"]

        if item["status"]=="Delivered":

            completed+=1

    return{

        "totalDonations":total,

        "totalMeals":meals,

        "completed":completed

    }
    