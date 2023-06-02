import { Component, OnInit } from '@angular/core';

import Foudre from '../types/foudre.type';

@Component({
  selector: 'app-foudre-list',
  templateUrl: './foudre-list.component.html',
  styleUrls: ['./foudre-list.component.css']
})
export class FoudreListComponent implements OnInit {
  
  foudre: Foudre[] = [
    { id : 1, name : 'Pikachu', size : '0,4m', evolution '3', weakness 'Sol', attack 'Camaraderie' },
    { id : 2, name : 'Voltorbe', size : '0,5m', evolution '2', weakness 'Sol', attack 'Charge' },
    { id : 3, name : 'Tetampoule', size : '0,3m', evolution '2', weakness 'Sol', attack 'Coud\'Boue' },
    ];
  constructor() { }

  ngOnInit() {
  }

}
