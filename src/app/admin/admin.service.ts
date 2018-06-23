import {Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import {Order, OrderItem} from '../order/order.model'
import {JBS_API} from '../app.api'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {ErrorHandler} from '../app.error-handler'
import { User } from '../security/login/user.model'

@Injectable()
export class AdminService {


  constructor(private http: HttpClient) {}

    pedidos(search?: string): Observable<Order[]> {
      let params: HttpParams = undefined;
      if (search) {
        params = new HttpParams().set('q', search);
      }
      return this.http.get<Order[]>(`${JBS_API}/orders`, {params: params})
    }

    pedidosById(id: string): Observable<Order> {
      return this.http.get<Order>(`${JBS_API}/orders/${id}`)
    }

    itensOfOrder(id: string): Observable<OrderItem[]> {
      return this.http.get<OrderItem[]>(`${JBS_API}/orders/${id}/orderItems`)
    }

    getUser(email: string) {
      return this.http.get<User>(`${JBS_API}/users?email=${email}`)
    }

}
