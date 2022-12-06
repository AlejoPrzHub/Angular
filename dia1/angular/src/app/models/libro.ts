export class Libro {
    id_libro:number;
    id_usuario:number;
    titulo:string;
    tipoLibro:string;
    autor:String;
    precio:number;
    photo:string;

    constructor(titulo,tipoLibro,autor,precio,photo,id_usuario = 0,id_libro = 0,)
    {
        this.id_libro = id_libro;
        this.id_usuario = id_usuario;
        this.titulo = titulo;
        this.tipoLibro = tipoLibro;
        this.autor = autor;
        this.precio = precio;
        this.photo = photo;

    }
}
