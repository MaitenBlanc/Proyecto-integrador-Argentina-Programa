function mostrarDatos(input){
    var valor = document.getElementById("valor");
    if(input.value == "ocultar"){
        valor.style.visibility = "hidden";
        input.value = "mostrar";
    } else {
        valor.style.visibility = "visible";
        input.value = "ocultar";
    }
    
}