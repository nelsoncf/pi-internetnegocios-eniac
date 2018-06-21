import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations'
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'

import {Marca} from './marca/marca.model'
import {MarcasService} from './marcas.service'

import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/from'
import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'mt-marcas',
  templateUrl: './marcas.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        'max-height': '0px'
      })),
      state('visible', style({
        opacity: 1,
        'max-height': '70px',
        'margin-top': '20px'
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class MarcasComponent implements OnInit {

  searchBarState = 'hidden'
  marcas: Marca[]

  searchForm: FormGroup
  searchControl: FormControl

  constructor(private marcasService: MarcasService,
              private fb: FormBuilder) { }

  ngOnInit() {

    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    this.searchControl.valueChanges
        .debounceTime(500)
        .distinctUntilChanged()
        .switchMap(searchTerm =>
          this.marcasService
            .marcas(searchTerm)
            .catch(error => Observable.from([])))
        .subscribe(marcas => this.marcas = marcas)

    this.marcasService.marcas()
      .subscribe(marcas => this.marcas = marcas)
  }

  toggleSearch() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }

}
