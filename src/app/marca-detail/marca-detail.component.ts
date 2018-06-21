import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import {MarcasService} from '../marcas/marcas.service'

import {Marca} from '../marcas/marca/marca.model'

@Component({
  selector: 'mt-marca-detail',
  templateUrl: './marca-detail.component.html'
})
export class MarcaDetailComponent implements OnInit {

  marca: Marca

  constructor(private marcasService: MarcasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.marcasService.marcaById(this.route.snapshot.params['id'])
      .subscribe(marca => this.marca = marca)
  }

}
