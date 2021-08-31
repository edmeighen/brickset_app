import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './headers/top-bar.component';
import { LogInBarComponent } from './headers/log-in-bar.component';
import { SearchBarComponent } from './headers/search-bar.component';
import { ButtonsBarComponent } from './headers/buttons-bar.component';

@NgModule({
  declarations: [
    AppComponent, TopBarComponent, LogInBarComponent, SearchBarComponent, ButtonsBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
