import { Calendar } from "lucide-react";
import React, { use } from "react";

const TicketCards = ({ ticketsPromise }) => {
  const tickets = use(ticketsPromise);

  return (
    <>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-4">
        {tickets.map((ticket, index) => (
          <div
            key={index}
            className="bg-white rounded shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] cursor-pointer"
          >
            <div className="px-4 py-5 space-y-2">
              <div className="space-y-2 lg:flex flex-row items-center justify-between">
                <h1 className="text-slate-900 text-lg font-medium line-clamp-1">
                  {ticket.title}
                </h1>

                <div className="inline-flex items-center gap-x-1.5 text-green-500 text-base font-medium px-3 py-1 bg-green-200 rounded-full">
                  <span className="size-4 bg-green-600 rounded-full"></span>
                  {ticket.status}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-500 text-base font-normal line-clamp-4 sm:line-clamp-2">
                  {ticket.description}
                </p>

                <div className="space-y-2 lg:space-y-0 lg:flex items-center justify-between">
                  <div className="lg:flex items-center gap-x-4">
                    <span className="text-slate-500 text-sm font-medium">
                      #{ticket.id}
                    </span>
                    <p className="text-red-500 text-sm font-medium">
                      {ticket.priority}
                    </p>
                  </div>

                  <div className="lg:flex items-center gap-x-4">
                    <span className="text-sm text-slate-500 font-normal">
                      {ticket.customer}
                    </span>
                    <p className="flex items-center gap-x-1 text-slate-500">
                      <Calendar size={20} />
                      <span>{ticket.createdAt}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TicketCards;
