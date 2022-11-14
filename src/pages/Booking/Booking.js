import React from "react";
import "./style.scss";

import PassesBooking from "./PassesBooking";
import TicketBooking from "./TicketBooking";

const Booking = () => {
  const [option, setOption] = React.useState(true);

  const optionTicket = () => {
    setOption(true);
  };
  const optionPass = () => {
    setOption(false);
  };
  return (
    <div className="booking-container">
      <div className="booking-body">
        <div className="toggler">
          <div
            className={`left ${option && "active-opt-ticket"}`}
            onClick={optionTicket}
          >
            <h3>Train Tickets</h3>
          </div>
          <div
            className={`right ${!option && "active-opt-pass"}`}
            onClick={optionPass}
          >
            <h3>Train Passes</h3>
          </div>
        </div>
        {!option ? (
          <div className="booking-content">
            <PassesBooking />
          </div>
        ) : (
          <div className="booking-content">
            <TicketBooking />
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
