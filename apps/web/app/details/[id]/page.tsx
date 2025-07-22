"use client";

import { useQuery } from "convex/react";

import { api } from "../../../../../convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "../../../../../convex/_generated/dataModel";

export default function TaskDetails() {
  const params = useParams();
  const id = params.id as Id<"tasks">;
  const task = useQuery(api.functions.tasks.getById, { id });

  if (task === undefined) return <p>Loading...</p>;
  if (task === null) return <p>Task not found</p>;

  return (
    <div className="p-4 border rounded border-gray-200 my-5">
      <h2 className="text-xl font-bold">{task.name}</h2>
      <p className="text-gray-600">{task.description}</p>
      <p
        className={`text-sm mt-2 ${
          task.isCompleted ? "text-green-600" : "text-red-600"
        }`}
      >
        {task.isCompleted ? "Completed" : "Not Completed"}
      </p>
    </div>
  );
}
