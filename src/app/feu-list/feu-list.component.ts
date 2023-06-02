import { Component, OnInit } from '@angular/core';

import Feu from '../types/feu.type';

@Component({
  selector: 'app-feu-list',
  templateUrl: './feu-list.component.html',
  styleUrls: ['./feu-list.component.css']
})
export class FeuListComponent implements OnInit {
  
  feu: Feu[] = [
    { id : 1, name : 'Salameche', size : '0,6m', evolution '3', weakness 'Eau', attack 'Griffe' },
    { id : 2, name : 'Reptincel', size : '1,1m', evolution '3', weakness 'Roche', attack 'Brouillard' },
    { id : 3, name : 'Arcanin', size : '1,9m', evolution '2', weakness 'Sol', attack 'Béllier' },
    ];
  constructor() { }

  ngOnInit() {
  }

}
