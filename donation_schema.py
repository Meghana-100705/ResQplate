from pydantic import BaseModel

class Donation(BaseModel):

    restaurantName: str
    foodName: str
    foodType: str
    quantity: int
    prepTime: str
    pickupTime: str
    location: str