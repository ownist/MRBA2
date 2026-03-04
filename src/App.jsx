import NavbarDesktop from "./components/Navbar/NavbarDesktop";
import TasksProgress from "./components/TasksProgress";

const App = () => {
  return (
    <>
      <NavbarDesktop />
      <main className="max-w-360 mx-auto px-4">
        <TasksProgress />
      </main>
    </>
  );
};

export default App;
