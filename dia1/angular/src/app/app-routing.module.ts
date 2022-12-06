import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {RegistroComponent} from "./pages/registro/registro.component";
import {PerfilComponent} from "./pages/perfil/perfil.component";
import {LibrosComponent} from "./pages/libros/libros.component"
import {AgregarLibrosComponent} from "./pages/agregar-libros/agregar-libros.component"
import {ModificarLibrosComponent} from "./pages/modificar-libros/modificar-libros.component"

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"registro", component:RegistroComponent},
  {path:"perfil", component:PerfilComponent},
  {path:"libros", component:LibrosComponent},
  {path:"agregarLibro", component:AgregarLibrosComponent},
  {path:"modificarLibro", component:ModificarLibrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
