import { CD } from "./CD.js";
import { HardDrive } from "./HardDrive.js";

const miCd = new CD("Mi CD favorito", 700, "Sony");
const miHdd = new HardDrive("HDD externo", 1000, "Seagate");

// Usando el CD
miCd.girar();
miCd.almacenarDatos("Música clásica");
miCd.leerDatos();
miCd.mostrarInformacion();

console.log("----------------");

// Usando el Disco Duro
miHdd.girar();
miHdd.almacenarDatos("Backup de proyectos");
miHdd.leerDatos();
miHdd.mostrarInformacion();