import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesListComponent } from './feu-list/feu-list.component';
import { VillainsListComponent } from './villains-list/villains-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    VillainsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
