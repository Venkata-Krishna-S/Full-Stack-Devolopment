import { NgModule, Testability } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KrishnasComponent} from './krishnas/krishnas.component'
import { VenkataComponent } from './venkata/venkata.component';
import { SandhupatlaComponent } from './sandhupatla/sandhupatla.component';
import{BindingComponent} from './binding/binding.component';


const routes: Routes = [
  {path:'secondName', component:KrishnasComponent},
  {path:'firstName',component:VenkataComponent},
  {path:'sirName',component:SandhupatlaComponent},
  {path:'dataBinding',component:BindingComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
