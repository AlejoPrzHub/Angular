import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/shared/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  
  public Libros: Libro[];

  constructor(public librosService:LibrosService)
  {
    this.Libros = 
    [
      // new Libro ("hola","yo","tu",12,"aqui",49,500),
      // new Libro ("hola","yo","tu",12,"aqui",49,200)
    ]
  }

  getAll(condicion:number)
  {
    if(condicion)
    {this.Libros=[this.librosService.getOne(condicion)]}
    else
    {this.Libros = this.librosService.getAll()}
  }

  getOne(condicion:number)
  {
    this.librosService.getOne(condicion)
    console.log(this.librosService)
  }

  delete(condicion:number)
  {
    this.librosService.delete(condicion);
    this.Libros = this.librosService.getAll()
  }
}
