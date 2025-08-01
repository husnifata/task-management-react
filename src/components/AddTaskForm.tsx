import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const taskSchema = z.object({
  text: z.string().min(1, { message: "Tugas tidak boleh kosong." }),
});

type TaskFormData = z.infer<typeof taskSchema>;

interface AddTaskFormProps {
  onAddTask: (text: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = (data: TaskFormData) => {
    onAddTask(data.text);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 mb-4"
    >
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Apa rencanamu hari ini?"
          className="flex-grow p-3 bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
          {...register("text")}
        />
        <button
          type="submit"
          className="px-6 py-3 font-semibold text-white bg-sky-600 rounded-md hover:bg-sky-700"
        >
          Tambah
        </button>
      </div>
      {errors.text && (
        <p className="text-sm text-red-500">{errors.text.message}</p>
      )}
    </form>
  );
};

export default AddTaskForm;
