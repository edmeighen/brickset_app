import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { BrowseComponent } from './body/browse/browse.component';
import { BuyComponent } from './body/buy/buy.component';
import { ForumComponent } from './body/forum/forum.component';
import { MySetsComponent } from './body/my-sets/my-sets.component';
import { MoreComponent } from './body/more/more.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'browse', component: BrowseComponent },
    { path: 'buy', component: BuyComponent },
    { path: 'forum', component: ForumComponent },
    { path: 'mysets', component: MySetsComponent },
    { path: 'more', component: MoreComponent },
    { path: 'auth', component: AuthComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }