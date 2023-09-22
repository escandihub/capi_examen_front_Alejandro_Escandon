import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {

  public usuarios = []
  constructor(
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.getUsuarios()
  }
  // import { MessageService } from 'src/app/services/message.service';

  getUsuarios() {
    this.usuariosService.optenerUsuarios().subscribe((res: any) => {
      console.log(res)
      this.usuarios = res.data
    })
  }
}

interface user{
  created_at: String,
  email: String,
  name: String,
}
