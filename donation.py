class DonationModel:

    def __init__(
        self,
        restaurantName,
        foodName,
        foodType,
        quantity,
        prepTime,
        pickupTime,
        location,
        priority,
        status
    ):

        self.restaurantName = restaurantName
        self.foodName = foodName
        self.foodType = foodType
        self.quantity = quantity
        self.prepTime = prepTime
        self.pickupTime = pickupTime
        self.location = location
        self.priority = priority
        self.status = status

    def to_dict(self):

        return {
            "restaurantName": self.restaurantName,
            "foodName": self.foodName,
            "foodType": self.foodType,
            "quantity": self.quantity,
            "prepTime": self.prepTime,
            "pickupTime": self.pickupTime,
            "location": self.location,
            "priority": self.priority,
            "status": self.status
        }