function VolunteerDashboard() {
  const deliveries = [
    {
      id: 1,
      restaurant: "Paradise Biryani",
      ngo: "Hope Foundation",
      food: "50 Meals",
      distance: "2 km",
      time: "15 mins",
    },
    {
      id: 2,
      restaurant: "Domino's Pizza",
      ngo: "Smile NGO",
      food: "25 Meals",
      distance: "4 km",
      time: "20 mins",
    },
    {
      id: 3,
      restaurant: "Taj Hotel",
      ngo: "Food For All",
      food: "80 Meals",
      distance: "1 km",
      time: "10 mins",
    },
  ];

  return (
    <div className="container py-5">

      <h2 className="text-center text-success fw-bold mb-5">
        🚚 Volunteer Dashboard
      </h2>

      <div className="row">

        {deliveries.map((item) => (

          <div className="col-md-4 mb-4" key={item.id}>

            <div className="card shadow border-0 h-100">

              <div className="card-body">

                <h4>{item.restaurant}</h4>

                <hr />

                <p><strong>Destination NGO:</strong> {item.ngo}</p>

                <p><strong>Food:</strong> {item.food}</p>

                <p><strong>Distance:</strong> {item.distance}</p>

                <p><strong>Estimated Time:</strong> {item.time}</p>

                <button className="btn btn-primary w-100 mb-2">
                  Accept Delivery
                </button>

                <button className="btn btn-success w-100">
                  Mark Delivered
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default VolunteerDashboard;