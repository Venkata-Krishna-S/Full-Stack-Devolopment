import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KrishnasComponent } from './krishnas/krishnas.component';
import { VenkataComponent } from './venkata/venkata.component';
import { SandhupatlaComponent } from './sandhupatla/sandhupatla.component';
import { BindingComponent } from './binding/binding.component';

@NgModule({
  declarations: [
    AppComponent,
    KrishnasComponent,
    VenkataComponent,
    SandhupatlaComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
