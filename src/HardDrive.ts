import { Disk } from "./IDisk.js";
import { CD } from "./CD.js";
import { StorageDevice } from "./StorageDevice.js";

export class HardDrive extends StorageDevice implements Disk {

constructor(nombre, capacidad, contenido){
    super(nombre, capacidad, contenido)
    this.setTipo("Disco Duro");
}
 girar():void{
    console.log('Disco Duro Girando...');
}

almacenarDatos(datos):void{
    this.getContenido=datos;
}

leerDatos():void{
    console.log(`Leyendo datos del disco duro: ${this.getContenido}`)
    }
    
mostrarInformacion():void{
    console.log(`Nombre:${this.getNombre}`, `Capacidad: ${this.getCapacidad}`, `Contenido: ${this.getContenido}`, `Tipo de disco: ${this.getTipo}`);
}

}



















