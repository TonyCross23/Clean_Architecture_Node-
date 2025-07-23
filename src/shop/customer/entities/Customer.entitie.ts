export class Customer {
  constructor(
    public readonly customer_name: string,
    public readonly email: string,
    public readonly phone: string,
    public readonly address: string,
  ) { }
}