import { Component } from '@angular/core';
// import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/shared/libros.service';

@Component({
  selector: 'app-agregar-libros',
  templateUrl: './agregar-libros.component.html',
  styleUrls: ['./agregar-libros.component.css']
})
export class AgregarLibrosComponent {

  // profileForm = new FormGroup
  // ({
  //   titulo:new FormControl(""),
  //   tipoLibro:new FormControl(""),
  //   autor:new FormControl(""),
  //   precio:new FormControl(""),
  //   photo:new FormControl(""),
  //   id_libro:new FormControl("")})

  public Libros: Libro[];

  constructor(public librosService:LibrosService)
  {
   
  }

  // onSubmit()
  // {
  //   let libro = new Libro(this.profileForm.controls["id_libro"].value,0,this.profileForm.controls["titulo"].value,this.profileForm.controls["tipoLibro"].value,this.profileForm.controls["autor"].value,this.profileForm.controls["precio"].value,this.profileForm.controls["photo"].value)
  //   this.librosService.libros.push(libro)
  //   console.log(this.librosService.libros)
  // }

  enviar(nuevotitulo:HTMLInputElement,nuevotipoLibro:HTMLInputElement,nuevoautor:HTMLInputElement,nuevoprecio:HTMLInputElement,nuevophoto:HTMLInputElement,nuevoidLibro:HTMLInputElement)
  {
    let libro = new Libro(nuevotitulo.value,nuevotipoLibro.value,nuevoautor.value,nuevoprecio.valueAsNumber,nuevophoto.value,0,nuevoidLibro.valueAsNumber)
    this.librosService.add(libro);
    console.log(libro)
  }
}
