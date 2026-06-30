function Features() {
  const features = [
    {
      icon: "🤖",
      title: "AI Food Matching",
      description:
        "Matches donated food with the most suitable NGO based on location, quantity, and urgency.",
    },
    {
      icon: "⚡",
      title: "Priority Engine",
      description:
        "Automatically prioritizes food nearing expiry to reduce waste.",
    },
    {
      icon: "🚚",
      title: "Volunteer Routing",
      description:
        "Suggests the nearest volunteer for faster pickup and delivery.",
    },
    {
      icon: "📊",
      title: "Impact Analytics",
      description:
        "Tracks meals served, CO₂ saved, and food rescued in real time.",
    },
  ];

  return (
    <section id="features" className="container py-5">
      <h2 className="text-center fw-bold mb-5">
        Why Choose ResQPlate?
      </h2>

      <div className="row">
        {features.map((feature, index) => (
          <div className="col-12 col-md-6 col-lg-3 mb-4" key={index}>
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body text-center">
                <h1>{feature.icon}</h1>

                <h4 className="fw-bold mt-3">
                  {feature.title}
                </h4>

                <p className="text-muted mt-3">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;