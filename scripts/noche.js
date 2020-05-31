function pintarEstrellas() {
    
    var noche = $("#noche");
    
    for (i = 0; i < 2000; i++) {
        
        var coordenada1 = 50 + Math.random() * 3000;
        var coordenada2 = Math.random() * 3000;
        var tiempo = Math.random() * 30;
        
        noche.append($("<div style='top:" + coordenada1 +"px; left: " + coordenada2 + "px; animation-duration: " + tiempo + "s;'></div>").addClass("estrella"));
    }
}

pintarEstrellas();
