import { HttpStatusCode } from "../configs/httpStatusCodes";

export class AppError extends Error {
  public statusCode: HttpStatusCode;

  constructor(statusCode: HttpStatusCode, message: string) {
    super(message);
    this.statusCode = statusCode;

    Object.setPrototypeOf(this, AppError.prototype);
    this.name = this.constructor.name;
  }
}