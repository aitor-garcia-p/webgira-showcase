import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DictionariesComponent } from './dictionaries/dictionaries.component';
import { HomeComponent } from './home/home.component';

import { ApiService } from './shared';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    DictionariesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
  ApiService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
