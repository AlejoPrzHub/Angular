export class Usuario {
    id_usuario:number;
    nombre:string;
    apellidos:string;
    correo:string;
    url:string;
    password:string;

    constructor(id_usuario=0,nombre:string,apellidos:string,correo:string,url:string,password:string)
    {
        this.id_usuario = id_usuario;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.correo = correo;
        this.url = url;
        this.password = password;
    }
}
