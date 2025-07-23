import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/httpErrors";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  // Fallback for unknown errors
  console.error(err);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};