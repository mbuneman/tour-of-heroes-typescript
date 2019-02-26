import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /*
  On désactive notre titre
  title = 'La tour des 1 héros';
  */
  titleStyle = {'font-family' : 'Arial', 'font-size' : '2rem'};
  username = 'Anonymous';
  heroes = [
    'Batman',
    'Superman',
    'Wonderwoman',
    'Ironman'
  ];
  heroToAdd = '';

  addHero() {
    this.heroes.push(this.heroToAdd);
    this.title = 'La tour des ' + this.heroes.length + ' héros';
  }
}
