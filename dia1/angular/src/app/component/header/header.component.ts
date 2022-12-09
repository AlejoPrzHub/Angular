import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    
  
  constructor(public usuarioService:UsuarioService)
  {
    if (usuarioService.logueado == false)
    console.log ("Usuario conectado " + usuarioService.logueado)
    else
    console.log("conectado")
  }

  
}
