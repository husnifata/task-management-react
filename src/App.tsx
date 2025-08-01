import { useEffect, useReducer, useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import type { Task, TaskAction } from "./types";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";

const API_URL =
  "https://my-json-server.typicode.com/husnifata/task-management-api/tasks";

function tasksReducer(tasks: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case "set":
      return action.payload;
    case "added":
      return [...tasks, action.payload];
    case "deleted":
      return tasks.filter((t) => t.id !== action.id);
    case "toggled":
      return tasks.map((t) => (t.id === action.id ? action.payload : t));
    default:
      throw new Error("Unknown action type");
  }
}

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);
  const location = useLocation();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Gagal fetch data dari API.");
        const data = await response.json();
        dispatch({ type: "set", payload: data });
      } catch (error) {
        console.error("Gagal mengambil tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  const handleAddTask = async (text: string) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, isCompleted: false }),
      });
      if (!response.ok) throw new Error("Gagal menambah task.");
      const newTask = await response.json();
      dispatch({ type: "added", payload: newTask });
    } catch (error) {
      console.error("Gagal menambah task:", error);
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Gagal menghapus task.");
      dispatch({ type: "deleted", id });
    } catch (error) {
      console.error("Gagal menghapus task:", error);
    }
  };

  const handleToggleComplete = async (task: Task) => {
    try {
      const response = await fetch(`${API_URL}/${task.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isCompleted: !task.isCompleted }),
      });
      if (!response.ok) throw new Error("Gagal mengubah status task.");
      const updatedTask = await response.json();
      dispatch({ type: "toggled", id: task.id, payload: updatedTask });
    } catch (error) {
      console.error("Gagal mengubah task:", error);
    }
  };

  const filteredTasks = useMemo(() => {
    switch (location.pathname) {
      case "/active":
        return tasks.filter((task) => !task.isCompleted);
      case "/completed":
        return tasks.filter((task) => task.isCompleted);
      default:
        return tasks;
    }
  }, [tasks, location.pathname]);

  const getLinkClass = (path: string) =>
    location.pathname === path
      ? "text-sky-400 font-bold"
      : "text-gray-400 hover:text-sky-400";

  return (
    <main className="p-8 min-h-screen text-white bg-gray-900">
      <div className="mx-auto max-w-xl">
        <h1 className="mb-6 text-4xl font-bold">Task Management</h1>

        <AddTaskForm onAddTask={handleAddTask} />

        <div className="flex gap-6 justify-center p-3 my-6 bg-gray-800 rounded-md">
          <Link to="/" className={getLinkClass("/")}>
            Semua
          </Link>
          <Link to="/active" className={getLinkClass("/active")}>
            Aktif
          </Link>
          <Link to="/completed" className={getLinkClass("/completed")}>
            Selesai
          </Link>
        </div>

        <div className="mt-8">
          <TaskList
            tasks={filteredTasks}
            onDeleteTask={handleDeleteTask}
            onToggleComplete={handleToggleComplete}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
