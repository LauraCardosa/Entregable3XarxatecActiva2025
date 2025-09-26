import { Disk } from "./IDisk.js";


export class StorageDevice{
    #nombre:string;
    #capacidad:number;
    #contenido:string;
    #tipoDisco:string;

getNombre():string{
    return this.#nombre;
}

getCapacidad():number{
    return this.#capacidad;
}

getContenido():string{
    return this.#contenido;
}

getTipo():string{
    return this.#tipoDisco;
}

setNombre(nombre):void{
    this.#nombre=nombre;
}

setCapacidad(capacidad):void{
    this.#capacidad=capacidad;
}

setContenido(contenido):void{
   this.#contenido=contenido;
}

setTipo(tipoDisco):void{
    this.#tipoDisco=tipoDisco;
}
constructor(nombre, capacidad, contenido){
    this.#nombre=nombre;
    this.#capacidad=capacidad;
    this.#contenido=contenido
}
almacenarDatos(datos):void{}
leerDatos():void{}
mostrarInformacion():void{}
}
