import { Request } from 'express';
import { ZodSchema } from 'zod';
export const validateSchema = (schema: ZodSchema) => async (req: Request) => {
  try {
    await schema.parseAsync({
      body: req.body,
    });

    return null;
  } catch (error) {
    return error;
  }
};
