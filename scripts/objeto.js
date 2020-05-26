

var c = { 
    "marca": "Ferrari",
    "velocidadMaxima": 240,
    "color": "Rojo",
    "numeroDeRuedas": 4,
    "propietario": {
        "nombre": "Jordi",
        "edad": 29
    }
}

class Coche {

    constructor(marca, velocidad, color, propietario) {
        this.marca = marca;
        this.velocidad = velocidad;
        this.color = color;
        this.propietario = propietario;
    }
}

class Propietario {

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

function muestraLaMarcaDelCoche() {
    var propietario = new Propietario("José Luis", "30");
    var coche5 = new Coche("Renault", 50, "Amarillo", propietario);
    alert(coche5.marca);
}

function muestraPropietario() {
    alert(Coche.propietario.nombre);
}