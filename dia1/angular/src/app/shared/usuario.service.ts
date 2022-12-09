import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url:string;
  public logueado:boolean;
  public usuario1:Usuario;

  constructor(private http:HttpClient, private router:Router) 
    {
     this.logueado = false
    }

  register(usuario:Usuario)
  {
    return this.http.post(this.url  = "http://localhost:3000/registro",usuario)
  }

  login(usuario:Usuario)
  {
    this.router.navigate(["/libros"]);
    return this.http.post(this.url  = "http://localhost:3000/login",usuario)
  }

}
