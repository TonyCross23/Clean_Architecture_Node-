import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";
import { INTERFACE_TYPE } from "../utils";
import { ICustomerInterface } from "../interfaces/ICustomerInterface";
import { ICustomerRepository } from "../interfaces/ICustomerRepository";

@injectable()
export class CustomerController {
  constructor(
    @inject(INTERFACE_TYPE.CustomerRepository) private repository: ICustomerRepository
  ) {
    this.repository = repository
  }

  createCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body

      const customer = await this.repository.create(data)
      console.log("Customer created successfully:", customer);

      res.status(201).json({
        message: "Customer created successfully",
        data: customer
      })
    } catch (error) {
      next(error)
    }
  }

  getAllCustomer = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const customer = await this.repository.getAllCustomer()
      res.status(200).json({
        message: "Customers retrieved successfully",
        data: customer
      })
    } catch (error) {
      next(error)
    }
  }
}