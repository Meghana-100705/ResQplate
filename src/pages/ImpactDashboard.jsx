function ImpactDashboard() {
  const stats = [
    { label: "Meals Saved", value: "12,450", icon: "🍛" },
    { label: "Restaurants", value: "350+", icon: "🏪" },
    { label: "NGOs", value: "80+", icon: "🤝" },
    { label: "Volunteer Deliveries", value: "1,250", icon: "🚚" },
    { label: "CO₂ Reduced", value: "2.8 Tons", icon: "🌍" },
  ];

  const recent = [
    "Paradise → Hope Foundation ✔",
    "Domino's → Smile NGO ✔",
    "Taj Hotel → Food For All ✔",
    "KFC → Care NGO ✔",
  ];

  return (
    <div className="container py-5">

      {/* Title */}
      <h2 className="text-center fw-bold text-success mb-5">
        🌍 Impact Dashboard
      </h2>

      {/* Stats */}
      <div className="row mb-5">

        {stats.map((item, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card shadow border-0 text-center h-100">
              <div className="card-body">
                <h1>{item.icon}</h1>
                <h3 className="fw-bold text-success">
                  {item.value}
                </h3>
                <p className="text-muted">{item.label}</p>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* Recent Activity */}
      <div className="card shadow border-0">
        <div className="card-body">

          <h4 className="fw-bold mb-3">
            Recent Successful Deliveries
          </h4>

          <ul className="list-group list-group-flush">

            {recent.map((item, i) => (
              <li key={i} className="list-group-item">
                {item}
              </li>
            ))}

          </ul>

        </div>
      </div>

    </div>
  );
}

export default ImpactDashboard;