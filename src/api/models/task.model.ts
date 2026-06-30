import mongoose, { Schema, HydratedDocument, InferSchemaType } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    completed: {
      type: Boolean,
      default: false,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    dueDate: Date,
    project: {
      type: Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export type Task = InferSchemaType<typeof taskSchema>;

export type TaskDocument = HydratedDocument<Task>;

export const TaskModel = mongoose.model<Task>("Task", taskSchema);
