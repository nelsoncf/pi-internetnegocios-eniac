import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {MarcasService} from '../../marcas/marcas.service'

import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private marcasService: MarcasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.marcasService
      .reviewsOfMarca(this.route.parent.snapshot.params['id'])
  }

}
