import { Router } from 'express';
import { getPatients, createPatient, updatePatient, deletePatient } from '../controllers/patient.controller';
import { validate } from '../middleware/validate.middleware';
import { patientSchema } from '../validators/patient.validator';

const router = Router();


router.get('/', getPatients);


router.post('/', validate(patientSchema), createPatient);


router.put('/:id', validate(patientSchema), updatePatient);


router.delete('/:id', deletePatient);

export default router;