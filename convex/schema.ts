import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

const schema = defineSchema({
  tasks: defineTable({
    name: v.string(),
    description: v.string(),
    isCompleted: v.boolean(),
  }),
});

export default schema;
