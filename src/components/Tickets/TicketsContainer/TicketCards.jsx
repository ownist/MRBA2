import React, { use } from "react";
import SingleTicketCard from "./SingleTicketCard";

const TicketCards = ({ ticketsPromise, handleTicketTaskStatus }) => {
  const tickets = use(ticketsPromise);

  return (
    <>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-4">
        {tickets.map((ticket, index) => (
          <SingleTicketCard
            handleTicketTaskStatus={handleTicketTaskStatus}
            ticket={ticket}
            key={index}
          />
        ))}
      </div>
    </>
  );
};

export default TicketCards;
