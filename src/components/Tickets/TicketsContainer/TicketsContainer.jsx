import { Logs } from "lucide-react";
import TicketCards from "./TicketCards";
import { Suspense } from "react";

const ticketsFetch = async () => {
  const res = await fetch("./data.json");
  return (await res).json();
};

const ticketsPromise = ticketsFetch();

const TicketsContainer = () => {
  return (
    <>
      <div className="col-span-full lg:col-span-8">
        <div className="">
          <div className="flex items-center justify-between">
            <h1 className="text-slate-700 text-xl sm:text-2xl font-semibold">
              Customer Tickets
            </h1>

            <button className="lg:hidden py-2 px-2.5 rounded bg-white border border-gray-300">
              <Logs size={16} className="text-zinc-700" />
            </button>
          </div>

          {/* tickets cards */}
          <Suspense fallback={<h1>Loading...</h1>}>
            <TicketCards ticketsPromise={ticketsPromise} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default TicketsContainer;
