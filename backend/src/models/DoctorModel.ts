import mongoose, { Document, Model } from "mongoose";

export interface IDoctor extends mongoose.Document {
  user: string;
  medicalHistory: string;
  vitals: string;
  specialization: string;
  price: number;
  workingHours: {
    start: string;
    end: string;
  };
}

const Schema = mongoose.Schema;
const DoctorSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  specialization: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  workingHours: {
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
      required: true,
    },
  },
  patients: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  medicalHistory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MedicalHistory",
    },
  ],
  vitals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vitals",
    },
  ],
});

const Doctor = mongoose.model<IDoctor>("Doctor", DoctorSchema);

export default Doctor;
