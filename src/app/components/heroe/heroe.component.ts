import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent implements OnInit {

  public heroe: any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.heroe = this.heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });

  }

}
