import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StartComponent} from "./start/start.component";


const routes: Routes = [
    {path : 'start' , component : StartComponent},
    {path : '', pathMatch : 'full', redirectTo : 'start'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule { }
