import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeroComponent } from './components/hero/hero.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
