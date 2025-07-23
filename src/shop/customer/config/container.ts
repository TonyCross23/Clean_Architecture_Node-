import { Container } from "inversify";
import { INTERFACE_TYPE } from "../utils";
import { ICustomerRepository } from "../interfaces/ICustomerRepository";
import { CustomerRepository } from "../repository/CustomerRepository";
import { ICustomerInterface } from "../interfaces/ICustomerInterface";
import { CustomerInteractor } from "../interactors/CustomerInteractor";
import { CustomerController } from "../controller/CustomerController";

const container = new Container()

container.bind<ICustomerRepository>(INTERFACE_TYPE.CustomerRepository).to(CustomerRepository)
container.bind<ICustomerInterface>(INTERFACE_TYPE.CustomerInteractor).to(CustomerInteractor)
container.bind<CustomerController>(INTERFACE_TYPE.CustomerController).to(CustomerController)

export default container