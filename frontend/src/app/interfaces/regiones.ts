export interface Region {
    nombre:string;
    comunas:Array<string>;
}
export var regionesI:Array<Region>=[
    {nombre:"Valparaiso",comunas:["El Tabo","Isla de Pascua"]},
    {nombre:"Bio Bio",comunas:["Concepción","Cañete"]},
    {nombre:"Coquimbo",comunas:["La Serena","Los Vilos"]},
    {nombre:"Ñuble",comunas:["Bulnes","Pemuco"]},
]