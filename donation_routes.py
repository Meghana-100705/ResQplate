from fastapi import APIRouter

from app.schemas.donation_schema import Donation
from app.ai.priority import calculate_priority

from app.services.firebase_service import (
    add_donation as save_donation,
    get_all_donations,
    accept_donation as update_donation_status
)

router = APIRouter()


# -----------------------------
# Add Donation
# -----------------------------
@router.post("/addDonation")
def add_donation(food: Donation):

    freshness = 90
    distance = 80
    demand = 100
    volunteer = 70

    priority = calculate_priority(
        freshness,
        distance,
        demand,
        volunteer
    )

    data = food.model_dump()

    data["priority"] = priority
    data["status"] = "Pending"

    save_donation(data)

    return {
        "message": "Donation Added",
        "priority": priority
    }


# -----------------------------
# Get All Donations
# -----------------------------
@router.get("/donations")
def get_donations():

    return get_all_donations()

# -----------------------------
# Accept Donation
# -----------------------------
@router.post("/acceptDonation/{id}")
def accept_donation(id: str):

    update_donation_status(id)

    return {
        "message": "Donation Accepted"
    }