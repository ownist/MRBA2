import { useState } from "react";
import NavbarDesktop from "./components/Navbar/NavbarDesktop";
import TasksProgress from "./components/TasksProgress";
import TicketsContainer from "./components/Tickets/TicketsContainer/TicketsContainer";
import TicketsStatus from "./components/Tickets/TicketsStatus/TicketsStatus";

const App = () => {
  const [insProgressTasks, setInProgressTasks] = useState([]);

  const handleTicketTaskStatus = (ticket) => {
    const pendingTicketstasks = [...insProgressTasks, ticket];
    setInProgressTasks(pendingTicketstasks);
  };

  return (
    <>
      <NavbarDesktop />
      <main className="max-w-360 mx-auto px-4">
        <TasksProgress />

        <section className="grid grid-cols-12 lg:gap-8 mb-20">
          <TicketsContainer handleTicketTaskStatus={handleTicketTaskStatus} />
          <TicketsStatus insProgressTasks={insProgressTasks} />
        </section>
      </main>
    </>
  );
};

export default App;
