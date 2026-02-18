import mongoose, { Schema, Document } from 'mongoose';

export interface IPatient extends Document {
    name: string;
    species: 'perro' | 'gato' | 'otro';
    ownerName: string;
    email: string;
    age: number;
    symptoms?: string;
}

const PatientSchema: Schema = new Schema({
    name: { type: String, required: true },
    species: { 
        type: String, 
        required: true, 
        enum: ['perro', 'gato', 'otro'] 
    },
    ownerName: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    symptoms: { type: String }
}, {
    timestamps: true,
    versionKey: false
});

export default mongoose.model<IPatient>('Patient', PatientSchema);