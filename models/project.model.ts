import mongoose, {
  Schema,
  type HydratedDocument,
  type InferSchemaType,
} from "mongoose";

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: {
        values: ["active", "completed", "archived"],
        message: "{VALUE} is not a valid status",
      },
      default: "active",
      required: true,
    },
  },
  { timestamps: true },
);

export type Project = InferSchemaType<typeof projectSchema>;

export type ProjectDocument = HydratedDocument<Project>;

export const ProjectModel = mongoose.model<Project>("Project", projectSchema);
