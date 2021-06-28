export interface Region {
    nombre:string;
    comunas:Array<string>;
}
export var regionesI:Array<Region>=[
    {nombre:"Valparaiso",comunas:["El Tabo","Isla de Pascua", "Los Andes", "Cabildo"]},
    {nombre:"Bio Bio",comunas:["Concepción","Cañete","Pemuco","Santa Juana","Lota"]},
    {nombre:"Coquimbo",comunas:["La Serena","Los Vilos","Illapel","La Higuera","Ovalle"]},
    {nombre:"Ñuble",comunas:["Bulnes","Pemuco","Yungay","Quillón","Pinto"]},
    {nombre:"Los Lagos",comunas:["Ancud","Puerto Montt","Frutillar","Osorno","Chaitén"]}
]