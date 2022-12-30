function mostrarNombre(){
    var valor = document.getElementById("nombre");
    if(input.value == "ocultar"){
        valor.style.visibility = "hidden";
        input.value = "mostrar";
    } else {
        valor.style.visibility = "visible";
        input.value = "ocultar";
    }
    
}

/**
$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });*/

  