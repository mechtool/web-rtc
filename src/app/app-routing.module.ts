import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path : 'authorization', loadChildren : ()=> import('./modules/authorization/authorization.module').then(m => m.AuthorizationModule), data : {type : 'authorization'}},
    {path : '', pathMatch :'full', redirectTo : 'authorization'} ,
    {path : '**', pathMatch :'full', redirectTo : 'authorization'} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
