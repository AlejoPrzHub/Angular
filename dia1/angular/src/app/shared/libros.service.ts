import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private libros:Libro[] = 
  [
    
  ]
  constructor() { }

  public getAll(): Libro[] {return this.libros};

  public getOne(id_libroo: number): Libro
  {
    console.log(id_libroo)
    let nuevoLibro:Libro = null
    for(let i=0;i<this.libros.length;i++)
    {
      if(this.libros[i].id_libro == id_libroo)
      {
        nuevoLibro = this.libros[i]
        console.log(nuevoLibro)
      }
      else console.log("error") 
    }
    console.log(nuevoLibro)
    return nuevoLibro
  };

  public add(libro: Libro): void
  {
    this.libros.push(libro),console.log(this.libros);
  }
  

  public delete(id_libro:number):boolean
  {
    console.log(id_libro)
    for(let i =0;i< this.libros.length;i++)
    {
      if(this.libros[i].id_libro == id_libro)
      {
        this.libros.splice(i,1);  
      }
    }
    return true
  }

  public edit(libro: Libro): boolean 
  {
    for(let i =0;i< this.libros.length;i++)
    {
      if(this.libros[i].id_libro == libro.id_libro)
      {
        this.libros[i]=libro 
      }
    }
    return true
  }
}
