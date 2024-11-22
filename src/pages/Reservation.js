import React from "react";
import ReservationForm from "../components/ReservationForm";

function Reservation() {
  return (
    <div className="container py-5">
      <h1>Table Reservation</h1>
      <p>Please fill out the form below to reserve your table.</p>
      <ReservationForm />
    </div>
  );
}

export default Reservation;
