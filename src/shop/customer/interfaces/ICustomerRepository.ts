import { Customer } from "../entities/Customer.entitie";

export interface ICustomerRepository {
  getAllCustomer(): Promise<Customer[]>
  create(data: Customer): Promise<Customer>
}