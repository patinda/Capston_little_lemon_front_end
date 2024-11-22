import React, { useState } from "react";

function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation confirmed!");
    setFormData({ name: "", email: "", date: "", time: "", guests: 1 });
  };

  return (
    <form onSubmit={handleSubmit} className="row g-3">
      <div className="col-md-6">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="date" className="form-label">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          className="form-control"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="time" className="form-label">Time</label>
        <input
          type="time"
          id="time"
          name="time"
          className="form-control"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="guests" className="form-label">Number of Guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          className="form-control"
          value={formData.guests}
          onChange={handleChange}
          min="1"
          max="10"
          required
        />
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">Reserve</button>
      </div>
    </form>
  );
}

export default ReservationForm;
