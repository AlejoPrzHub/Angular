import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Libro } from 'src/app/models/libro';
import { Usuario } from 'src/app/models/usuario';
import { LibrosService } from 'src/app/shared/libros.service';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  
  public Libros: Libro[];

  constructor(public librosService:LibrosService, public usuarioService:UsuarioService)
  {
    this.Libros = 
    [
      // new Libro ("hola","yo","tu",12,"aqui",49,500),
      // new Libro ("hola","yo","tu",12,"aqui",49,200)
    ]
  }

  getAll(id_libro:number)
  {
    
    if(id_libro)
    {this.librosService.getOne(this.usuarioService.usuario1.id_usuario, id_libro)
    .subscribe((data:Libro[])=>
    {
      console.log(data)
      if(data)
      {
      console.log("Libro obtenido correctamente")
      this.Libros = data
      }
      else
      console.log("ERROR al obtener Libro")
    })}
    else

    {this.librosService.getAll(this.usuarioService.usuario1.id_usuario)
    .subscribe((data:Libro[])=>
    {
      console.log(this.usuarioService.usuario1.id_usuario)
      if(data.length > 0)
      {
      console.log("Libro obtenido correctamente")
      this.Libros = data
      }
      else
      console.log("ERROR al obtener Libro")
    })}
  }
  

  getOnee(id_libro:number)
  {
    this.librosService.getOne(this.usuarioService.usuario1.id_usuario, id_libro)
    .subscribe((data:Libro[])=>
      {
        if(data.length > 0)
        {
        console.log("Libro obtenido correctamente")
        this.Libros = data
        }
        else
        console.log("ERROR al obtener Libro")
      })
  }

  
  delete(id_libro:string)
  {
    this.librosService.delete({"id_libro":id_libro})
    .subscribe((data)=>
      {
        console.log("Libro Eliminado correctamente")
        console.log(data)
      })

    this.librosService.getAll(this.usuarioService.usuario1.id_usuario)
    .subscribe((data:Libro[])=>
    {
      console.log(this.usuarioService.usuario1.id_usuario)
      if(data.length > 0)
      {
      console.log("Libro obtenido correctamente")
      this.Libros = data
      }
      else
      console.log("ERROR al obtener Libro")
    })
  }
}
