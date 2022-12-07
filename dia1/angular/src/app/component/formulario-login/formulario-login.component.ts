import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import {UsuarioService} from "../../shared/usuario.service"

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent {

  constructor(public UsuarioService:UsuarioService){}

  iniciarSesion(correo:HTMLInputElement,password:HTMLInputElement)
  {
    let usuario = new Usuario(null,null,null,correo.value,null,password.value)

    this.UsuarioService.login(usuario).subscribe((data:Usuario[])=>{console.log(data)})
  }
}
