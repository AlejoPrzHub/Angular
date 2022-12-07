import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import {UsuarioService} from "../../shared/usuario.service"

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent {

  public message:string
  constructor(public UsuarioService:UsuarioService)
  {
    this.message = null;
  }

  registrarUsuario(nombre:HTMLInputElement,apellidos:HTMLInputElement,correo:HTMLInputElement,url:HTMLInputElement,password:HTMLInputElement,password2:HTMLInputElement)
  {
    // if(password != password2)
    // {
    //   console.log("Las Contraseñas no coinciden")
      
    // }
    // else
    // {
      let usuario = new Usuario(0,nombre.value,apellidos.value,correo.value,url.value,password.value)
      this.UsuarioService.register(usuario)
      .subscribe((data:String)=>
      {
        if(data != "-1")
        {
        console.log("Usuario insertado correctamente")
        usuario.id_usuario = Number(data)
        }
        else
        console.log("ERROR al insertar usuario")
      })

      console.log(usuario);
    // }
  }

}
