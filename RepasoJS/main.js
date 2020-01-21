
/* Mensajes PopUp */
alert('hola mundo desde alert');

/* Variables */
var nombre = "Marco Perdomo";
var altura = 190;

var concatenacion = nombre + " " + altura + " usando concatenación de variables.";

document.write(nombre + " desde variable"); /* Muestra la información de la variable en el HTML */
document.write(altura + " desde variable"); /* Muestra la información de la variable en el HTML */
document.write(concatenacion); /* Muestra la información de la variable en el HTML */

var datos = document.getElementById("datos"); /* Obtención de un elemento del DOM de HTML */
datos.innerHTML = "Dentro del DIV " + concatenacion + " dentro de un elemento HTML (div)";

/* Template Strings - Sirve para integrar variables con strings */
datos.innerHTML = 
`
  <h1>Hola soy la caja de datos</h1>
  <h2>Mi nombre es: ${nombre}</h2>
  <h3>Mido: ${altura} cm</h3>
  <h4> Usando Template String ó Variables mezclando cadenas de texto y variables de javascript</h4>
`;

/* Estructuras de control */
  /* Condicionales */
    if (altura >= 190) {
      datos.innerHTML += '<h1>Eres una persona ALTA usando condicional if</h1>'
    } else {
      datos.innerHTML += '<h1>Eres una persona BAJITA usando condicional else</h1>'
    }
    /* Notas:
        * Usar el operador += sirve para concatenar lo que ya existía en la variable y no reemplazar
          lo viejo con lo nuevo.
    */
  /* Bucles */
    for (var i = 2000; i <= 2020; i++) {
      // Bloque de instrucciones del bucle/ciclo for
      datos.innerHTML += "<h2>Estamos en el año: " + i + "usando bucle for</h2>"
    }
    /* Notas:
      *i++(i = i+1) significa que si se cumple la condición a la variable i se le incrementará uno.
   */
  /* Funciones con parámetros */
    function MuestraMiNombre( nombre, altura ){
      /* Template Strings - Sirve para integrar variables con strings */
        datos.innerHTML = 
        `
          <h1>Hola soy la caja de datos desde función</h1>
          <h2>Mi nombre es: ${nombre}</h2>
          <h3>Mido: ${altura} cm</h3>
          <h4> usando función con parámetro</h4>
        `;
    }

    function MuestraMiNombre1( nombre, altura ){
      /* Template Strings - Sirve para integrar variables con strings */
      var misDatos = 
        `
          <h1>Hola soy la caja de datos desde función</h1>
          <h2>Mi nombre es: ${nombre}</h2>
          <h3>Mido: ${altura} cm</h3>
          <h4> usando función con parámetro y return de una variable</h4>
        `;
      return misDatos; /* Sirve para sacar la variable de la función y pueda ser usada en todo el 
                          código JS 
                       */
    }

    function imprimir()
    {
      /* Template Strings - Sirve para integrar variables con strings */
      var misDatos = MuestraMiNombre1();
      datos.innerHTML = MuestraMiNombre1("Marco Perdomo usando una función que se llena desde " + 
      "otra función", 175);
    }
    
    /* Invocar función */
    MuestraMiNombre("Marco Perdomo usando una función", 175);
    imprimir();


    /* Notas: 
      * Las variables usadas dentro de una función son variables locales osea que solo se pueden usar
        dentro de la función pero también sobreescriben variables globales.
      * Las funciones deben ser invocadas/instanciadas/Mandadas a llamar
    */
  
  /* Arrays/Arreglos ó colección de datos o strings*/
    var nombres = ['Victor', 'Joaquín', 'Antonio']; 
    alert( "Mostrando una posición del array específica " + nombres[1]); /* Muestra Joaquín */
    alert( "Mostrando todos la información del array " + nombres); /* Muestra todos los nombres */
    /* Notas:
      * Los arrays se controlan por posiciones
        *Victor es posición cero ( [0] )
        *Joaquín es posición cero ( [1] )
        *Antonio es posición cero ( [2] )
    */
    
    /* Ciclo for con Arrays */
    document.write('<h1>Listado de nombres</h1>'); 
    for ( i = 0; i < nombres.length; i++) {
      document.write("Mostrando los nombres usando bucle for " + nombres[i] + '<br/>');      
    }
    nombres.forEach(function (nombre) {
      document.write("Mostrando los nombres usando forEach " + nombre + '<br/>');
    });

    /* Funciones con flecha =>  */
    nombres.forEach( (nombre) => {
      document.write("Mostrando los nombres usando forEach y flecha " + nombre + '<br/>');
    });


    /* Objeto con propiedades */
    var coche = {
      modelo: 'Mercedes Clase A',
      maxima: 500,
      antiguedad: 2020,
    };

    /* Objeto con propiedades y con función */
    var coche = {
      modelo: 'Mercedes Clase A',
      maxima: 500,
      antiguedad: 2020,
      mostrarDatos(){
        console.log(this.modelo, this.maxima, this.antiguedad);
      },
      propiedad1: "valor aleatorio"
    };

    /* Impresión de las propiedades en el HTML */
    document.write("<h1>" + coche.modelo + "</h1>")
    document.write("<h1>" + coche.antiguedad + "</h1>")

    /* Invocar la función dentro del objeto coche */
    coche.mostrarDatos();
    console.log(coche);
    