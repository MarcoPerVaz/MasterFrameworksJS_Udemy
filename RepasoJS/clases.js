
/* Notas:
    *El método constructor es que inicia antes que cualquier otro método dentro de la clase.
      *En el constructor se crean las propiedades de la clase.
      *En los métodos o funciones se indican las acciones o funciones de la propiedad o cualidad.
*/
class Coche {

  /* Notas:
    *Las clases también pueden llevar parámetros
    *Solo puede haber un método constructor
  */
  /* Ejemplo sin parámetro */
    // constructor(){
    //   this.modelo = '';
    //   this.velocidad = '';
    //   this.antiguedad = '';
    // }

  /* Ejemplo con parámetro */
  constructor(modelo, velocidad, antiguedad){
    this.modelo = modelo;
    this.velocidad = velocidad;
    this.antiguedad = antiguedad;
  }

  aumentarVelocidad(){
    this.velocidad += 1;
  }
  reducirVelocidad(){
    this.velocidad -= 1;
  }

}
/* Herencia */
  /* Notas:
      *La herencia hereda las propiedades de la clase padre(Coche)
      *La clase Autobus hereda las propiedades de la clase padre(Coche)
      *La palabra clave super es usada para acceder y llamar funciones del padre de un objeto.
      *Se pueden agregar nuevas propiedades a la clase Autobus
  */
  class Autobus extends Coche {

    constructor(modelo, velocidad, antiguedad){

      /* La palabra clave super es usada para acceder y llamar funciones del padre de un objeto. */
      super(modelo, velocidad, antiguedad);
      this.altura = 5;
    }

    mostrarAltura(){
      return "La altura del bus es: " + this.altura;
    }

  }
var autobus1 = new Autobus('PEGASUS', 200, 2017);
console.log(autobus1);
console.log(autobus1.mostrarAltura());
/* Fin Herencia */

var coche1 = new Coche('BMW', 200, 2017);
var coche2 = new Coche('Audi', 100, 2018);
var coche3 = new Coche('Mercedes', 200, 2017);
var coche4 = new Coche('Renault', 200, 2017);

// console.log(coche1); /* Muestra la velocidad inicial del coche */
document.write("<h1>Velocidad: " + coche1.velocidad +  "</h1>");
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
coche1.aumentarVelocidad();
// console.log(coche1); /* Muestra la velocidad del coche después de haber ejecutado el método aumentar velocidad 3 veces */
document.write("<h1>Velocidad: " + coche1.velocidad + "</h1>");
