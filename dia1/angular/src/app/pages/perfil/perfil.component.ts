import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  public miUsuario :Usuario;

  constructor()
  {
    this.miUsuario = new Usuario(1,"Pepito","Perez","pepito123@gmail.com","https://images.unsplash.com/photo-1583795128727-6ec3642408f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1957&q=80","pepito5000")
  }

enviar1(nuevoUsuario:HTMLInputElement)
{
  console.log(this.miUsuario.nombre)
  this.miUsuario.nombre = nuevoUsuario.value
  console.log(this.miUsuario.nombre)
}
enviar2(nuevoUsuario:HTMLInputElement)
{ 
  this.miUsuario.apellidos = nuevoUsuario.value
}
enviar3(nuevoUsuario:HTMLInputElement)
{
  this.miUsuario.correo = nuevoUsuario.value
}
enviar4(nuevoUsuario:HTMLInputElement)
{
  this.miUsuario.url = nuevoUsuario.value
}

}
