import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

export const validate = (schema: z.Schema) => (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: 'Error de validación',
        errors: (error as any).errors.map((e: any) => ({
          field: e.path[1],
          message: e.message
        }))
      });
    }
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};