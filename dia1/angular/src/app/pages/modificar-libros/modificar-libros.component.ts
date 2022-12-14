import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/shared/libros.service';

@Component({
  selector: 'app-modificar-libros',
  templateUrl: './modificar-libros.component.html',
  styleUrls: ['./modificar-libros.component.css']
})
export class ModificarLibrosComponent {


  public Libros: Libro[];

  constructor(public librosService:LibrosService)
  {
   
  }


  modificar(nuevotitulo:string,nuevotipoLibro:string,nuevoautor:string,nuevoprecio:number,nuevophoto:string,nuevoidLibro:number)
  {

    let nuevolibro = 
    {
      titulo:nuevotitulo?nuevotitulo:null,
      tipoLibro:nuevotipoLibro?nuevotipoLibro:null,
      autor:nuevoautor?nuevoautor:null,
      precio:nuevoprecio?nuevoprecio:null,
      photo:nuevophoto?nuevophoto:null,
      id_libro:nuevoidLibro?nuevoidLibro:null,
      id_usuario:null  
    }
    this.librosService.edit(nuevolibro,nuevoidLibro)
    .subscribe((data:String)=>
    {
      if(data != "-1")
      {
      console.log("Libro Modificado correctamente")
      nuevolibro.id_libro = Number(data)
      }
      else
      console.log("ERROR al modificar libro")
    })
  }

}
