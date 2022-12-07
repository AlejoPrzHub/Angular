import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  servicio:UsuarioService

  constructor()
  {
    //  this.servicio.logueado =true
  }
}
