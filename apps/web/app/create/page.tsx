"use client";

import { useMutation } from "convex/react";
import { useState } from "react";
import { api } from "../../../../convex/_generated/api";
import { useRouter } from "next/navigation";

export default function CreateTask() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const createTask = useMutation(api.functions.tasks.create);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createTask({ name, description });
      console.log("Task created:", { name, description });

      // Reset form
      setName("");
      setDescription("");
      setLoading(false);
      alert("Task created Successfully!");
      router.push("/")
    } catch (error) {
      console.error("Failed to create task:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md border border-gray-200 my-5"
    >
      <h2 className="text-lg font-bold text-gray-700">Create a Task</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Task Name"
        className="border rounded-md px-4 py-2 text-sm border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
        required
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        className="border border-gray-200 rounded-md px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
        rows={4}
        required
      />

      <button
        type="submit"
        className="bg-teal-800 hover:bg-teal-600 text-white px-4 cursor-pointer py-2 rounded-md text-sm font-medium"
      >
        {loading ? "Creating..." : "Submit"}
      </button>
    </form>
  );
}
