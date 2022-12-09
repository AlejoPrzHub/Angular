import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  public miUsuario :Usuario;

  constructor(public UsuarioService:UsuarioService)
  {
    this.miUsuario = 
    {
      id_usuario:UsuarioService.usuario1.id_usuario,
      nombre:UsuarioService.usuario1.nombre,
      apellidos:UsuarioService.usuario1.apellidos,
      correo:UsuarioService.usuario1.correo,
      url:UsuarioService.usuario1.url,
      password:null
    }

    // this.miUsuario = new Usuario(1,"Blanca","Mercado","Blanca@gmail.com","../../../assets/img/blanca.png","Blanca2000")
  }

enviar1(nuevoNombre:HTMLInputElement,nuevoApellido:HTMLInputElement,nuevoCorreo:HTMLInputElement,nuevourl:HTMLInputElement)
{
  console.log(this.miUsuario.nombre)
  this.miUsuario.nombre = nuevoNombre.value
  this.miUsuario.apellidos = nuevoApellido.value
  this.miUsuario.correo = nuevoCorreo.value
  this.miUsuario.url = nuevourl.value
  console.log(this.miUsuario.nombre)
}


}
