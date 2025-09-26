import { Disk } from "./IDisk.js";
import { StorageDevice } from "./StorageDevice.js";


export class CD extends StorageDevice implements Disk {

constructor(nombre, capacidad, contenido){
    super(nombre, capacidad, contenido)
    this.setTipo("CD");
}

girar():void{
    console.log('CD Girando...');
}

almacenarDatos(datos):void{
    this.setContenido(datos);
}

leerDatos():void{
    console.log(`Leyendo datos del CD ${this.getContenido}`)
    }
    
mostrarInformacion():void{
    console.log(`Nombre:${this.getNombre}`, `Capacidad: ${this.getCapacidad}`, `Contenido: ${this.getContenido}`, `Tipo de disco: ${this.getTipo}`);
}

}