import { Component, OnInit } from '@angular/core';
import { Order } from '../order/order.model';
import { AdminService } from './admin.service'
import { LoginService } from '../security/login/login.service'
import { User } from '../security/login/user.model';

@Component({
  selector: 'mt-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {

  pedidos: Order[]
  moneyTexto: string
  isAdmin: Boolean

  constructor(
    private adminService: AdminService,
    private loginService: LoginService
  ) { }

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
