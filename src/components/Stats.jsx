function Stats() {
  const stats = [
    {
      number: "12,000+",
      title: "Meals Saved",
      icon: "🍛",
    },
    {
      number: "350+",
      title: "Restaurants",
      icon: "🏪",
    },
    {
      number: "80+",
      title: "NGOs",
      icon: "🤝",
    },
    {
      number: "2 Tons",
      title: "Food Rescued",
      icon: "🌱",
    },
  ];

  return (
    <section className="container py-5">

      <h2 className="text-center fw-bold mb-5">
        Our Impact
      </h2>

      <div className="row">

        {stats.map((item, index) => (

          <div className="col-12 col-md-6 col-lg-3 mb-4" key={index}>

            <div className="card shadow-sm border-0 h-100">

              <div className="card-body text-center">

                <h1>{item.icon}</h1>

                <h3 className="fw-bold text-success">
                  {item.number}
                </h3>

                <p className="text-muted">
                  {item.title}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Stats;