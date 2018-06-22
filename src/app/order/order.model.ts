class Order {
  constructor(
    public address: string,
    public number: number,
    public optionalAddress: string,
    public paymentOption: string,
    public orderItems: OrderItem[] = [],
    public id?: string,
    public qtd?: number,
    public itemsValue?: number,
    public total?: number,
  ) {}
}

class OrderItem {
  constructor(
    public quantity: number,
    public menuId: string,
    public price: number,
    public name: string,
  ) {}
}

export {Order, OrderItem}
