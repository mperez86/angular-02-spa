import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from 'src/app/models/heroe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
})
export class HeroeCardComponent implements OnInit {

  @Input()
  public heroe: any = {};

  @Input()
  public index: number;

  @Output()
  heroeSelected: EventEmitter<number>;

  constructor( private router: Router) {
    this.heroeSelected = new EventEmitter();
   }

  ngOnInit(): void {
  }

  showHeroe() {
    //console.log(this.index);
    this.router.navigate(['/heroes', this.index]);
    //this.heroeSelected.emit(this.index);
  }

}
