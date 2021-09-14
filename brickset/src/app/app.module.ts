import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './headers/top-bar.component';
import { LogInBarComponent } from './headers/log-in-bar.component';
import { SearchBarComponent } from './headers/search-bar.component';
import { ButtonsBarComponent } from './headers/buttons-bar.component';
import { MySetsComponent } from './cards/my-sets.component';
import { MinifigsComponent } from './cards/minifigs.component';
import { DailyBugleComponent } from './cards/daily-bugle.component';
import { LayoutMainComponent } from './layout/layout-main.component';

@NgModule({
  declarations: [
    AppComponent, 
    TopBarComponent, 
    LogInBarComponent, 
    SearchBarComponent, 
    ButtonsBarComponent, 
    MySetsComponent, 
    MinifigsComponent, 
    DailyBugleComponent, 
    LayoutMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
