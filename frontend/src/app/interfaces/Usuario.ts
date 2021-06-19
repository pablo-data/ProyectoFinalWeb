export interface Ticket{
  prioridad:string;
  estado:string;
  numero:number;
  asunto:string;
  descripcion:string;
}
//Todos los usuarios de la base de datos con los que el 
//administrador puede interactuar en la web.
export interface Usuario {
  nombres: string;
  apellidos: string;
  rut: string;
  direccion: string;
  region: string;
  comuna: string;
  email: string;
  tickets:Array<Ticket>;
}
export var ticketUsuarios: Ticket[] = [
   
];
export var miUsuario: Usuario = {
  nombres: '',
  apellidos: '',
  rut: '',
  direccion: '',
  region: '',
  comuna: '',
  email: '',
  tickets: ticketUsuarios,
};
/*Tabla de usuarios la cual puede ver el administrador.

  test
*/
export var tablaUsuarios: Usuario[] = [
   
];