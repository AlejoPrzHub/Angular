import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  profileForm = new FormGroup
  ({
    titulo:new FormControl(""),
    tipoLibro:new FormControl(""),
    autor:new FormControl(""),
    precio:new FormControl(""),
    photo:new FormControl(""),
    id_libro:new FormControl("")})

  public Libros: Libro[];
  public libro:Libro;

  constructor()
  {
    this.Libros = 
    [
      // new Libro(0,0,"Velero rojo","tapa dura","Juan Jimenez",50,"https://pictures.abebooks.com/inventory/5216856968.jpg"),

      // new Libro(0,0,"Velero Azul","Digital","Juan Perez",40,"https://pictures.abebooks.com/inventory/5216856968.jpg")
    ]
  }

  onSubmit()
  {
    let libro = new Libro(this.profileForm.controls["id_libro"].value,0,this.profileForm.controls["titulo"].value,this.profileForm.controls["tipoLibro"].value,this.profileForm.controls["autor"].value,this.profileForm.controls["precio"].value,this.profileForm.controls["photo"].value)
    console.log(libro)
    this.Libros.push(libro)
  }

}
