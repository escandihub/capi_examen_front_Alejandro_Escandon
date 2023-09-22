import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { UsuariosService } from './services/usuarios.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [TablaUsuariosComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [TablaUsuariosComponent],
  providers: [UsuariosService]
})
export class UsuariosModule { }
