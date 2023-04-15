import { Request, Response } from "express";
import Vitals, { IVital } from "../models/VitalModel";
import Patient, { IPatient } from "../models/PatientModel";
import User, { IUser } from "../models/UserModel";
import { log } from "console";

// add bloodpressure api

export const addBloodPressure = async (req: Request, res: Response) => {
  try {
    const value = req.body.value;
    const userId = req.body.user.id;

    let vital = await Vitals.findOne({ user: userId });

    if (!vital) {
      vital = new Vitals({ user: userId, bloodPressure: [{ value }] });
    } else {
      if (!vital.bloodPressure) {
        vital.bloodPressure = [{ value }];
        console.log(vital.bloodPressure);
      } else {
        vital.bloodPressure.push({ value });
      }
    }
    await vital.save();

    res.json(vital);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
// get bloodpressure api
export const getBloodPressure = async (req: Request, res: Response) => {
  try {
    const userId = req.body.user.id;
    const retrievedBloodPressure = await Vitals.findOne(
      { user: userId },
      { bloodPressure: 1 }
    );
    if (!retrievedBloodPressure) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(retrievedBloodPressure.bloodPressure);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
