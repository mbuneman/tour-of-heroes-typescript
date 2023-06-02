import { Component, OnInit } from '@angular/core';

import Plante from '../types/plante.type';

@Component({
  selector: 'app-plante-list',
  templateUrl: './plante-list.component.html',
  styleUrls: ['./plante-list.component.css']
})
export class PlanteListComponent implements OnInit {
  
  plante: Plante[] = [
    { id : 1, name : 'Herbizarre', size : '1,0m', evolution '3', weakness 'Feu', attack 'Croissance' },
    { id : 2, name : 'Florizarre', size : '2,0m', evolution '3', weakness 'Vol', attack 'Charge' },
    { id : 3, name : 'Arcko', size : '0,5m', evolution '3', weakness 'Poison', attack 'Feuillage' },
    ];
  constructor() { }

  ngOnInit() {
  }

}
