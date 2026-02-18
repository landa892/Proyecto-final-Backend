import { z } from 'zod';

export const patientSchema = z.object({
  body: z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 letras"),

    species: z.string().refine((val) => ['perro', 'gato', 'otro'].includes(val), {
      message: "La especie debe ser: perro, gato u otro"
    }),

    ownerName: z.string().min(3, "El nombre del dueño es obligatorio"),
    email: z.string().email("Debe ser un email válido"),
    age: z.number().min(0, "La edad no puede ser negativa"),
    symptoms: z.string().optional()
  })
});