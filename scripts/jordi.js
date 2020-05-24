
function calcularEdat() {
    
    var dia = 19;
    var mes = 5;
    var any = 2020;
    
    var diaNacimiento = $("#dia").val();
    var mesNacimiento = $("#mes").val();
    var añoNacimiento = $("#any").val();
        
    var edad = any - añoNacimiento;

    if (mesNacimiento > mes) {
        edad = edad - 1;
    }
    
    if (diaNacimiento > dia) {
        edad = edad - 1;
    }
    
    alert(edad);
    
}

const lista = $("#lista");

function anadirLista() {
    
    var elemento = $("#elementoLista").val();
    lista.append("<li>" + elemento + "</li>");
}