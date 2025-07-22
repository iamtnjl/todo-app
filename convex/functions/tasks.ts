import { mutation, query } from "../_generated/server";
import { v } from "convex/values";

// Fetch all tasks
export const list = query({
  args: {},
  handler: async (ctx: any) => {
    return await ctx.db.query("tasks").collect();
  },
});

export const getById = query({
  args: {
    id: v.id("tasks"),
  },
  handler: async (ctx, args) => {
    const task = await ctx.db.get(args.id);
    if (!task) throw new Error("Task not found");
    return task;
  },
});

// Create a new task
export const create = mutation({
  args: {
    name: v.string(),
    description: v.string(),
  },
  handler: async (ctx: any, args: any) => {
    await ctx.db.insert("tasks", {
      name: args.name,
      description: args.description,
      isCompleted: false,
    });
  },
});

// Toggle task completion
export const toggleComplete = mutation({
  args: { id: v.id("tasks") },
  handler: async (ctx: any, args: any) => {
    const task = await ctx.db.get(args.id);
    if (!task) throw new Error("Task not found");

    await ctx.db.patch(args.id, {
      isCompleted: !task.isCompleted,
    });
  },
});
