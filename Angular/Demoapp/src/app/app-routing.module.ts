import { NgModule, Testability } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KrishnasComponent} from './krishnas/krishnas.component'


const routes: Routes = [
  {path:'test', component:KrishnasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
