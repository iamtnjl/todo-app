/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  const tasks = useQuery(api.functions.tasks.list);
  const toggleComplete = useMutation(api.functions.tasks.toggleComplete);
  const [loadingTaskId, setLoadingTaskId] = useState<string | null>(null);

  if (tasks === undefined) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-600 text-lg">Loading tasks...</p>
      </div>
    );
  }

  return (
    <div className="py-5 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <p className="text-lg text-gray-700 font-bold">Task list</p>
        <Link
          href={"/create"}
          className="text-sm text-white hover:bg-teal-600 font-medium px-4 py-2 rounded-md bg-teal-800 cursor-pointer"
        >
          Create task
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {tasks.map((item: any) => (
          <Link
            href={`/details/${item._id}`}
            key={item._id}
            className="flex flex-col gap-4 rounded-md border border-gray-200 p-2 justify-between"
          >
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-700 font-semibold">
                {item.name}
              </p>
              <p className="text-sm text-gray-400 font-medium">
                {item.description}
              </p>
            </div>
            <button
              onClick={async (e) => {
                e.stopPropagation();
                e.preventDefault();
                setLoadingTaskId(item._id);
                await toggleComplete({ id: item._id });
                setLoadingTaskId(null);
              }}
              disabled={item.isCompleted || loadingTaskId === item._id}
              className={`text-sm font-medium px-4 py-2 rounded-md ${
                item.isCompleted
                  ? "border border-teal-700 text-teal-700 cursor-not-allowed"
                  : "bg-teal-800 hover:bg-teal-600 text-white cursor-pointer"
              }`}
            >
              {loadingTaskId === item._id
                ? "Updating..."
                : item.isCompleted
                  ? "Completed"
                  : "Mark as completed"}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
