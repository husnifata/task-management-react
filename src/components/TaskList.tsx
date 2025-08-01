import React from "react";
import type { Task } from "../types";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (id: string) => void;
  onToggleComplete: (task: Task) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onDeleteTask,
  onToggleComplete,
}) => {
  if (tasks.length === 0) {
    return <p className="text-center text-gray-500">Belum ada tugas.</p>;
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
          onToggle={onToggleComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;
