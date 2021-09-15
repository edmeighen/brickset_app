import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
    { path: 'home', component: BodyComponent },
    { path: 'browse', component: BodyComponent },
    { path: 'buy', component: BodyComponent },
    { path: 'mysets', component: BodyComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }