import mongoose, {
  Schema,
  type HydratedDocument,
  type InferSchemaType,
} from "mongoose";
/*
interface Project {
  _id: ObjectId;

  name: string;
  description?: string;

  owner: ObjectId;

  status: "active" | "completed" | "archived";

  createdAt: Date;
  updatedAt: Date;
}
*/

const projectModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  
});
