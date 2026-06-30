function NGODashboard() {
  const donations = [
    {
      id: 1,
      restaurant: "Paradise Biryani",
      food: "Veg Biryani",
      quantity: "50 Meals",
      distance: "2 km",
      priority: "High",
    },
    {
      id: 2,
      restaurant: "Domino's Pizza",
      food: "Pizza Slices",
      quantity: "25 Meals",
      distance: "4 km",
      priority: "Medium",
    },
    {
      id: 3,
      restaurant: "Taj Hotel",
      food: "Mixed Meals",
      quantity: "80 Meals",
      distance: "1 km",
      priority: "High",
    },
  ];

  return (
    <div className="container py-5">

      <h2 className="mb-4 text-center fw-bold text-success">
        NGO Dashboard
      </h2>

      <div className="row">

        {donations.map((item) => (

          <div className="col-md-4 mb-4" key={item.id}>

            <div className="card shadow border-0 h-100">

              <div className="card-body">

                <h4>{item.restaurant}</h4>

                <hr />

                <p><strong>Food:</strong> {item.food}</p>

                <p><strong>Quantity:</strong> {item.quantity}</p>

                <p><strong>Distance:</strong> {item.distance}</p>

                <p>
                  <strong>Priority:</strong>

                  <span
                    className={`badge ms-2 ${
                      item.priority === "High"
                        ? "bg-danger"
                        : "bg-warning text-dark"
                    }`}
                  >
                    {item.priority}
                  </span>
                </p>

                <button className="btn btn-success w-100">
                  Accept Donation
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default NGODashboard;