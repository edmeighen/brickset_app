import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './headers/top-bar.component';
import { LogInBarComponent } from './headers/log-in-bar.component';
import { SearchBarComponent } from './headers/search-bar.component';
import { ButtonsBarComponent } from './headers/buttons-bar.component';
import { MySetsCardComponent } from './cards/my-sets-card.component';
import { MinifigsComponent } from './cards/minifigs.component';
import { DailyBugleComponent } from './cards/daily-bugle.component';
import { LayoutMainComponent } from './layout/layout-main.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './body/home/home.component';
import { BrowseComponent } from './body/browse/browse.component';
import { BuyComponent } from './body/buy/buy.component';
import { ForumComponent } from './body/forum/forum.component';
import { MySetsComponent } from './body/my-sets/my-sets.component';
import { OurDatabaseComponent } from './body/browse/our-database.component';
import { SetCardsComponent } from './body/set-cards.component';
import { MoreComponent } from './body/more/more.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './headers/user-info.component';
import { EditUserInfoComponent } from './body/edit-user-info.component';
import { FormsModule } from '@angular/forms';
import { AddSetComponent } from './body/more/add-set.component';
import { MySetCardComponent } from './body/my-sets/set-card.component';
import { MySetCardsInComponent } from './body/my-sets/my-set-in.component';
import { AddMySetComponent } from './body/my-sets/add-my-set.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent, 
    TopBarComponent, 
    LogInBarComponent, 
    SearchBarComponent, 
    ButtonsBarComponent, 
    MySetsCardComponent, 
    MinifigsComponent, 
    DailyBugleComponent, 
    LayoutMainComponent, 
    HomeComponent, 
    BrowseComponent, 
    BuyComponent, 
    ForumComponent, 
    MySetsComponent,
    OurDatabaseComponent,
    SetCardsComponent,
    MoreComponent,
    UserInfoComponent,
    EditUserInfoComponent,
    AddSetComponent,
    MySetCardComponent,
    MySetCardsInComponent,
    AddMySetComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'brickset-app')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
