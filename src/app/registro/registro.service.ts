import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/filter'
import {JBS_API} from '../app.api'
import { User } from '../security/login/user.model'
import { Router, NavigationEnd } from '@angular/router';
import { unescapeIdentifier } from '@angular/compiler';

@Injectable()
export class RegistroService {

  user: User
  lastUrl: string

    constructor(private http: HttpClient, private router: Router) {
        this.router.events.filter(e => e instanceof NavigationEnd)
            .subscribe( (e: NavigationEnd) => this.lastUrl = e.url)
    }


  registrar(name: string, email: string, password: string, cpf: string): Observable<any> {
    return this.http.post<User>(`${JBS_API}/users`,
                            {
                              name: name,
                              email: email,
                              password: password,
                              cpf: cpf,
                              profiles: ['user']
                            })
                        .do(user => this.user = user)
  }
}
