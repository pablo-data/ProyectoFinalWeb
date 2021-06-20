/**
 * Corresponde al ticket que visualiza el administrador
 * 
 */
export interface TicketForm {
  prioridad_idPrioridad: number;
  asunto: string;
  descripcion: string;
  categoria: string;
  usuario_idUsuario: number;
  idFormulario:number;
}
/**
 * Corresponde al form que el usuario llena en la web,
 * ignorando el idFormulario que solamente es obtenido
 * desde la base de datos.
 */
export interface FormReclamo {
  prioridad_idPrioridad: number;
  asunto: string;
  descripcion: string;
  categoria: string;
  usuario_idUsuario: number;
}
/**
 * Ticket generado luego de que el usuario complete
 * el formulario.
 */
export interface Ticket {
  respuesta: string;
  estado: string;
  formulario_idFormulario: number;
  prioridad_idPrioridad: number;
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