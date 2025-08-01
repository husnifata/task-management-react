export interface Task {
  id: string;
  text: string;
  isCompleted: boolean;
}

export type TaskAction =
  | { type: "set"; payload: Task[] }
  | { type: "added"; payload: Task }
  | { type: "deleted"; id: string }
  | { type: "toggled"; id: string; payload: Task };
