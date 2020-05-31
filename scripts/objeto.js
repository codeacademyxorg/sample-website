class Coche {

    constructor(marca, velocidad, color, propietario, precio) {
        this.marca = marca;
        this.velocidad = velocidad;
        this.color = color;
        this.propietario = propietario;
        this.precio = precio;
    }

    accelerar() {
        this.velocidad = this.velocidad + 10;
    }

    aplicarCostesDeEnvio() {
        this.precio = this.precio + 100;
    }
}

class Propietario {

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

var propietario = new Propietario("José Luis", 30);
var coche = new Coche("Renault", 50, "Amarillo", propietario, 12000);

function anadirExtra() {
    $("#coche").empty();
    coche.aplicarCostesDeEnvio();
    mostrarDatosCoche();
}

function mostrarDatosCoche() {
    $("#coche")
        .append($("<p></p>").text("Marca: " + coche.marca))
        .append($("<p></p>").text("Color: " + coche.color))
        .append($("<p></p>").text("Precio final: " + coche.precio + "€"));
}

mostrarDatosCoche();