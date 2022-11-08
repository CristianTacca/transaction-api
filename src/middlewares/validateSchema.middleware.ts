import { AnySchema } from "yup";
import { NextFunction, Request, Response } from "express";

const validateSchema =
  (shape: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const transaction = await shape.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });

      req.values = transaction;

      return next();
    } catch (err: any) {
      return res.status(400).json({ error: err.errors });
    }
  };

export default validateSchema;
