import hero from "../assets/hero.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="container py-5">

      <div className="row align-items-center">

        <div className="col-lg-6">

          <span className="badge bg-success mb-3 fs-6">
            AI Powered Food Rescue Platform
          </span>

          <h1 className="display-5 display-md-3 fw-bold">
            Rescue Food.
            <br />
            Feed Communities.
            <br />
            Reduce Waste.
          </h1>

          <p className="lead text-muted mt-4">
            Connect restaurants, NGOs and volunteers
            to rescue surplus food before it goes to waste.
          </p>

          <div className="mt-4 d-flex flex-column flex-md-row gap-2">

            <Link to="/add" className="btn btn-success btn-lg me-3">
               Donate Food
            </Link>

            <Link to="/volunteer" className="btn btn-outline-primary btn-lg">
              Become Volunteer
            </Link>

          </div>

        </div>

        <div className="col-lg-6 text-center">

        <img
        src={hero}
        alt="Food Donation"
        className="img-fluid rounded-4 shadow-lg"
        style={{
          width: "100%",
          maxWidth: "520px",
          height: "420px",
          objectFit: "cover",
        }}
      />

        </div>

      </div>

    </section>
  );
}

export default Hero;