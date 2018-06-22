import {Injectable} from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {Marca} from "./marca/marca.model"
import {MenuItem} from '../marca-detail/menu-item/menu-item.model'

import {JBS_API} from '../app.api'
import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class MarcasService {

    constructor(private http: HttpClient){}

    marcas(search?: string): Observable<Marca[]> {
      let params: HttpParams = undefined;
      if(search){
        params = new HttpParams().set('q', search);
      }
      return this.http.get<Marca[]>(`${JBS_API}/marcas`, {params: params})
    }

    marcaById(id: string): Observable<Marca>{
      return this.http.get<Marca>(`${JBS_API}/marcas/${id}`)
    }

    reviewsOfMarca(id: string): Observable<any>{
      return this.http.get(`${JBS_API}/marcas/${id}/reviews`)
    }

    menuOfMarca(id: string): Observable<MenuItem[]>{
      return this.http.get<MenuItem[]>(`${JBS_API}/marcas/${id}/menu`)
    }

}
