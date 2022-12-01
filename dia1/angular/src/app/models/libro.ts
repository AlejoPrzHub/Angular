export class Libro {
    id_libro:number;
    id_usuario:number;
    titulo:string;
    tipoLibro:string;
    autor:String;
    precio:number;
    photo:string;

    constructor(id_libro,id_usuario,titulo,tipoLibro,autor,precio,photo)
    {
        this.id_libro = 0;
        this.id_usuario = 0;
        this.titulo = titulo;
        this.tipoLibro = tipoLibro;
        this.autor = autor;
        this.precio = precio;
        this.photo = photo;

    }
}
