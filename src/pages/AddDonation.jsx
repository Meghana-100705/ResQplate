import { useState } from "react";

function AddDonation() {
  const [formData, setFormData] = useState({
    restaurant: "",
    food: "",
    quantity: "",
    expiry: "",
    pickup: "",
    address: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert("Donation Submitted Successfully!");

    console.log(formData);
  }

  return (
    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-lg-8">

          <div className="card shadow-lg border-0">

            <div className="card-header bg-success text-white text-center">
              <h2>🍱 Donate Surplus Food</h2>
            </div>

            <div className="card-body p-4">

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label">Restaurant Name</label>
                  <input
                    className="form-control"
                    name="restaurant"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Food Item</label>
                  <input
                    className="form-control"
                    name="food"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Quantity (Meals)</label>
                  <input
                    type="number"
                    className="form-control"
                    name="quantity"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="row">

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Pickup Time
                    </label>

                    <input
                      type="time"
                      className="form-control"
                      name="pickup"
                      onChange={handleChange}
                    />

                  </div>

                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Expiry Time
                    </label>

                    <input
                      type="datetime-local"
                      className="form-control"
                      name="expiry"
                      onChange={handleChange}
                    />

                  </div>

                </div>

                <div className="mb-3">

                  <label className="form-label">
                    Pickup Address
                  </label>

                  <textarea
                    className="form-control"
                    rows="3"
                    name="address"
                    onChange={handleChange}
                  ></textarea>

                </div>

                <div className="mb-4">

                  <label className="form-label">
                    Food Image
                  </label>

                  <input
                    type="file"
                    className="form-control"
                  />

                </div>

                <button className="btn btn-success w-100">
                  Submit Donation
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AddDonation;