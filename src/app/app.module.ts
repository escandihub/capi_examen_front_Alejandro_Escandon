import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosModule } from './usuarios/usuarios.module';
// import { TablaUsuariosComponent } from './usuarios/tabla-usuarios/tabla-usuarios.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuariosModule,
    
    // TablaUsuariosComponent
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
