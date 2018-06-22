import {Injectable} from '@angular/core'

import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import {ShoppingCartService} from '../marca-detail/shopping-cart/shopping-cart.service'
import {CartItem} from '../marca-detail/shopping-cart/cart-item.model'
import {Order, OrderItem} from './order.model'

import {JBS_API} from '../app.api'

import { LoginService } from '../security/login/login.service'

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService,
              private http: HttpClient
            ) {}

  itemsValue(): number {
    return this.cartService.total()
  }

  cartItems(): CartItem[] {
    return this.cartService.items
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item)
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item)
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item)
  }

  clear() {
    this.cartService.clear()
  }

  checkOrder(order: Order): Observable<string> {

    return this.http.post<Order>(`${JBS_API}/orders`, order)
                    .map(order => order.id)
  }

}
