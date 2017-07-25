
export class Customer {

  constructor (
    public firstName = '',
    public lastName = '',
    public email = '',
    public sendCatalog = false,
    public adressType = 'home',
    public street1?: string,
    public street2?: string,
    public city?: string,
    public state = '',
    public zip?: string
  ) {}

}
