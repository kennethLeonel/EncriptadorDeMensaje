
let arreglo =[];

function encriptar() {
    let texto = document.getElementsByClassName("encriptador")[0].value;
    texto = texto.toLowerCase(); 
    var concatenacion = "";
    texto.split("").forEach(function (letra){
        switch (letra) {
            case "a":
            concatenacion = concatenacion + "ai";
            break;

            case "e":
            concatenacion = concatenacion + "enter";
            break;

            case "i":
            concatenacion = concatenacion + "imes";
            break;

            case "o":
            concatenacion = concatenacion + "ober";
            break;

            case "u":
            concatenacion = concatenacion + "ufat";
            break;

            default:
            concatenacion = concatenacion + letra;
            
            break;

        }
    }); 
    arreglo.push(concatenacion);
    document.getElementById("historial").value = arreglo;
    // var historialMensajes = document.getElementsByClassName("historial");
    // historialMensajes.setAttribute("value",arreglo);
    document.getElementById("form1").reset();
}

function desencriptar(){
    let texto = document.getElementsByClassName("encriptador")[0].value;
    texto = texto.toLowerCase(); 
    var concatenacion = "";
    divi = texto.split("");
    for (let i = 0; i < divi.length; i++) {
        if (divi[i] == "o") {
            concatenacion = concatenacion + divi[i];
            i = i + 3;
        }else if (divi[i] == "u") {
            concatenacion = concatenacion + divi[i];
            i = i + 3;
        }else if (divi[i] == "i") {
            concatenacion = concatenacion + divi[i];
            i = i + 3;
        }else if (divi[i] == "e") {
            concatenacion = concatenacion + divi[i];
            i = i + 4;
        }else if (divi[i] == "a") {
            concatenacion = concatenacion + divi[i];
            i = i + 1;
        }
        else {
            concatenacion = concatenacion + divi[i];
        }
    }
    arreglo.push(concatenacion);
    document.getElementById("historial").value = arreglo;
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








