export interface Ticket{
  prioridad_idPrioridad:number;
  asunto:string;
  descripcion:string;
  categoria:string;
  usuario_idUsuario:number;
}
export interface Usuario {
  nombres: string;
  apellidos: string;
  rut: string;
  direccion: string;
  region: string;
  comuna: string;
  email: string;
  contraseña:string;
}