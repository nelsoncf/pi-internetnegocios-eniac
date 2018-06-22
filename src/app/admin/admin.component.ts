import { Component, OnInit } from '@angular/core';
import { Order } from '../order/order.model';
import { AdminService } from './admin.service'

@Component({
  selector: 'mt-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {

  pedidos: Order[]
  moneyTexto: string

  constructor(private adminService: AdminService) { }

  ngOnInit() {

    this.adminService.pedidos()
      .subscribe(pedidos => this.pedidos = pedidos)

  }

  switchMoney(money: string) {

    switch (money) {
      case 'MON':
        this.moneyTexto = 'Dinheiro'
        break
      case 'DEB':
        this.moneyTexto = 'Débito'
        break
      case 'CRE':
        this.moneyTexto = 'Crédito'
        break
    }
  }


}
