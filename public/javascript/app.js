
    let arreglo =[];

function encriptar() {
    let texto = document.getElementsByClassName("encriptador")[0].value;
    arreglo.push(texto);
    document.getElementById("historial").value = arreglo;
    // var historialMensajes = document.getElementsByClassName("historial");
    // historialMensajes.setAttribute("value",arreglo);
    document.getElementById("form1").reset();
}

function copiar(){
    let copyText =   document.getElementById("historial");
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);
        document.getElementById("mirar").innerHTML = "Mensaje copiado";

        //Mirar como dejar el 
    setTimeout(function(){
        document.getElementById("mirar").innerHTML = "";
    }, 3000);
 
 


    
}

function limpiar(){
      document.getElementById("historial").value = "";
      arreglo = [];
    
   
    
}
    // var encriptado = CryptoJS.AES.encrypt(texto, "secret key 123");
    // return encriptado.toString();








