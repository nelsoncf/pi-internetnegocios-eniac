import { Component, OnInit } from '@angular/core';
import { Order } from '../order/order.model';
import { AdminService } from './admin.service'
import { LoginService } from '../security/login/login.service'
import { User } from '../security/login/user.model';
import { Router} from '@angular/router'

@Component({
  selector: 'mt-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {

  pedidos: Order[]
  moneyTexto: string
  isAdmin: Boolean
  adminUser: any

  constructor(
    private adminService: AdminService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user()
    this.getUserDetail(this.user().email)
  }

  user(): any {
    return this.loginService.user
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

  getUserDetail(email: string): any {
    this.adminService.getUser(email)
    .subscribe(
      (user) => {
        this.adminUser = user,
        this.podeAcessar(this.adminUser)
      },
      () => {},
      () => { console.log(this.adminUser)},
    )
  }

  podeAcessar(adminUser) {
    if (adminUser[0].profiles.includes('admin')) {
      this.isAdmin = true
      this.adminService.pedidos()
      .subscribe(pedidos => this.pedidos = pedidos)
      console.log('É ADMIN')
    } else {
      this.isAdmin = false
      this.router.navigate(['/marcas'])
      console.log('não é admin')
    }
  }

}
