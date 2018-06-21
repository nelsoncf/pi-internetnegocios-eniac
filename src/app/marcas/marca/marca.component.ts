import { Component, OnInit, Input } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations'

import {Marca} from './marca.model'

@Component({
  selector: 'mt-marca',
  templateUrl: './marca.component.html',
  animations: [
    trigger('marcaAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class MarcaComponent implements OnInit {

  marcaState = 'ready'

  @Input() marca: Marca

  constructor() { }

  ngOnInit() {
  }

}
