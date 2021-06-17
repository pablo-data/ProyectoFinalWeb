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
  {
    prioridad: 'alta',
    estado: 'Abierto',
    numero: 11,
    asunto: 'XD',
    descripcion: 'vial eri un fraca',
  },
  {
    prioridad: 'media',
    estado: 'cerrado',
    numero: 11,
    asunto: 'XD',
    descripcion: 'vial eri un fraca',
  },
  {
    prioridad: 'baja',
    estado: 'cerrado',
    numero: 11,
    asunto: 'XD',
    descripcion: 'vial eri un fraca',
  },
];
export var miUsuario: Usuario = {
  nombres: 'sps',
  apellidos: 'ppp',
  rut: '20.319.s-0',
  direccion: 'llll',
  region: '1',
  comuna: '2',
  email: 'cocos@mail.pucB',
  tickets: ticketUsuarios,
};
/*Tabla de usuarios la cual puede ver el administrador.

  test
*/
export var tablaUsuarios: Usuario[] = [
  {
    nombres: 'Pedro',
    apellidos: 'basualto leon grrr',
    rut: '20.319.456-0',
    direccion: 'llll',
    region: '1',
    comuna: '1',
    email: 'cocos@mail.pucB',
    tickets: [
      {
        prioridad: 'alta',
        estado: 'abierto',
        numero: 11,
        asunto: 'XD',
        descripcion: 'vial eri un fraca',
      },
      {
        prioridad: 'baja',
        estado: 'cerrado',
        numero: 11,
        asunto: 'XD',
        descripcion: 'vial eri un fraca',
      },
    ],
  },
  {
    nombres: 'sps',
    apellidos: 'ppp',
    rut: '20.319.s-0',
    direccion: 'llll',
    region: '1',
    comuna: '2',
    email: 'cocos@mail.pucB',
    tickets: ticketUsuarios,
  },
  {
    nombres: 'sps',
    apellidos: 'ppp',
    rut: '20s56-0',
    direccion: 'llll',
    region: '2',
    comuna: '3',
    email: 'cocos@mail.pucB',
    tickets: ticketUsuarios,
  },
  {
    nombres: 'sps',
    apellidos: 'ppp',
    rut: '20.gfds0',
    direccion: 'llll',
    region: '4',
    comuna: '4',
    email: 'cocos@mail.pucB',
    tickets: ticketUsuarios,
  },
  {
    nombres: 'sps',
    apellidos: 'ppp',
    rut: '20.319.456-0',
    direccion: 'llll',
    region: '5',
    comuna: '4',
    email: 'cocos@mail.pucB',
    tickets: ticketUsuarios,
  },
];