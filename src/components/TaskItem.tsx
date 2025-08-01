import React from "react";
import type { Task } from "../types";

interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void;
  onToggle: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onToggle }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg transition-all">
      <span
        className={`flex-grow ${
          task.isCompleted ? "line-through text-gray-500" : ""
        }`}
      >
        {task.text}
      </span>
      <div className="flex gap-3 items-center">
        <button
          onClick={() => onToggle(task)}
          className={
            task.isCompleted
              ? "text-yellow-500 hover:text-yellow-400"
              : "text-green-500 hover:text-green-400"
          }
        >
          {task.isCompleted ? "Batal" : "Selesai"}
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-400"
        >
          Hapus
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
