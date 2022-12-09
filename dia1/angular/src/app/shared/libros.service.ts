import { Injectable } from '@angular/core';
import { Libro } from '../models/libro';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private url:string;

  private libros:Libro[] = 
  [
    
  ]
  constructor(private http:HttpClient) { }

  public getAll(id_usuario:number)
  {
    return this.http.get(this.url  = `http://localhost:3000/libros?id_usuario= ${id_usuario}`)
  }

  public getOne(id_usuario:number,id_libro:number)
  {
    return this.http.get(this.url  = `http://localhost:3000/libros2?id_usuario= ${id_usuario}&id_libro= ${id_libro}`)
  }

  public add(libro:Libro)
  {
    return this.http.post(this.url  = "http://localhost:3000/libros",libro)
  }

  public edit(libro:Libro,id_libro:number)
  {
    const httpOption = {headers:null,body:id_libro}
    return this.http.put(this.url  = "http://localhost:3000/libros",libro,httpOption)

  }

  public delete(id_libro:any)
  {
    const httpOption = {headers:null,body:id_libro}
    return this.http.delete(this.url  = "http://localhost:3000/libros",httpOption)
  }







      ////////////////ANTERIOR/////////////////////


  // public getAll(): Libro[] {return this.libros};

  // public getOne(id_libroo: number): Libro
  // {
  //   console.log(id_libroo)
  //   let nuevoLibro:Libro = null
  //   for(let i=0;i<this.libros.length;i++)
  //   {
  //     if(this.libros[i].id_libro == id_libroo)
  //     {
  //       nuevoLibro = this.libros[i]
  //       console.log(nuevoLibro)
  //     }
  //     else console.log("error") 
  //   }
  //   console.log(nuevoLibro)
  //   return nuevoLibro
  // };

  // public add(libro: Libro): void
  // {
  //   this.libros.push(libro),console.log(this.libros);
  // }
  

  // public delete(id_libro:number):boolean
  // {
  //   console.log(id_libro)
  //   for(let i =0;i< this.libros.length;i++)
  //   {
  //     if(this.libros[i].id_libro == id_libro)
  //     {
  //       this.libros.splice(i,1);  
  //     }
  //   }
  //   return true
  // }

  // public edit(libro: Libro): boolean 
  // {
  //   for(let i =0;i< this.libros.length;i++)
  //   {
  //     if(this.libros[i].id_libro == libro.id_libro)
  //     {
  //       this.libros[i]=libro 
  //     }
  //   }
  //   return true
  // }

}
