import { Response, Request, NextFunction } from 'express';
import { validationResult } from 'express-validator';

const validateFields = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next(); // Go to the next middleware
};

export default validateFields;
