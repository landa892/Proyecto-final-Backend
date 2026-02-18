import { Request, Response } from 'express';
import Patient from '../models/Patient';

export const getPatients = async (req: Request, res: Response) => {
  try {
    const { species, name } = req.query;


    const filter: any = {};

    if (species) {
      filter.species = species;
    }

    if (name) {

      filter.name = { $regex: name, $options: 'i' };
    }

    const patients = await Patient.find(filter);
    res.json(patients);

  } catch (error) {
    res.status(500).json({ message: 'Error al obtener pacientes', error });
  }
};

export const createPatient = async (req: Request, res: Response) => {
  try {

    const newPatient = new Patient(req.body);
    const savedPatient = await newPatient.save();
    res.status(201).json(savedPatient);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear paciente', error });
  }
};


export const updatePatient = async (req: Request, res: Response) => {
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPatient) return res.status(404).json({ message: 'Paciente no encontrado' });
    res.json(updatedPatient);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar', error });
  }
};


export const deletePatient = async (req: Request, res: Response) => {
  try {
    const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
    if (!deletedPatient) return res.status(404).json({ message: 'Paciente no encontrado' });
    res.json({ message: 'Paciente eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar', error });
  }
};