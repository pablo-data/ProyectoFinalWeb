/**
 * Corresponde al ticket que visualiza el administrador,
 * contiene la informacion tanto del ticket generado luego
 * de que el usuario completa el formulario de reclamo y del propio
 * formulario, asi se despliegan los datos de ambos.
 */
export interface TicketForm {
  idTicket?: number;
  prioridad_idPrioridad?: number;
  respuesta:string;
  asunto: string;
  descripcion: string;
  categoria: string;
  estado: string;
  usuario_idUsuario?: number;
  idFormulario: number;
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
  idTicket?:number;
  respuesta: string;
  estado: string;
  formulario_idFormulario: number;
  prioridad_idPrioridad: number;
}
/**
 * Corresponde al ticket que el usuario ve en la seccion de mis tickets.
 */
export interface TicketUsuario {
  asunto: string;
  descripcion: string;
  respuesta: string;
  estado: string;
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
  contraseña: string;
  idUsuario?:number;
}