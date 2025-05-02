
import { SGAEA } from '../js/SGAEA.js';

const sistema = new SGAEA();

sistema.insertaEstudiante(1, "Juan Pérez", 20, "Calle A", 10, "1B", "08001", "Barcelona", "Barcelona");
sistema.creaAsignatura(101, "Matemáticas", "1º ESO");
sistema.matriculaEstudiante(1, 101);
sistema.califica(1, 101, 7);
sistema.califica(1, 101, 8);
sistema.califica(1, 101, 9);
console.log(sistema.informeGeneral(1));
