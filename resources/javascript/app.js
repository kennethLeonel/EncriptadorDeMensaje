
let arreglo =[];
limpiar();
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
    if (concatenacion !=" "){
        let imagen = document.getElementById("imgMensaje");
        imagen.src = "../resources/img/detectiveEncriptado.png";
        imagen.style.width = "200px";
        let titulo = document.getElementById("histoH3");
        titulo.innerHTML = "Historial de mensajes";
        arreglo.push(concatenacion);
    }
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
            // i = i + 3;
            if ((divi[i+1] == "b") && (divi[i+2] == "e") && (divi[i+3] == "r")) {
                i = i + 3;
            }
        }else if (divi[i] == "u") {
            
            concatenacion = concatenacion + divi[i];
            if((divi[i+1] == "f") && (divi[i+2] == "a") && (divi[i+3] == "t")){
            i = i + 3;
            }
        }else if (divi[i] == "i") {
            concatenacion = concatenacion + divi[i];
            if((divi[i+1] == "m") && (divi[i+2] == "e") && (divi[i+3] == "s")){
            i = i + 3;
            }
        }else if (divi[i] == "e") {
            concatenacion = concatenacion + divi[i];
            if ((divi[i+1] == "n") && (divi[i+2] == "t") && (divi[i+3] == "e") && (divi[i+4] == "r")) {
                i = i + 4;
            }
         
        }else if (divi[i] == "a") {
            concatenacion = concatenacion + divi[i];
            if ((divi[i+1] == "i")) {
                i = i + 1;
            }
        }
        else {
            concatenacion = concatenacion + divi[i];
        }
    }
    if (concatenacion !=" "){
        arreglo.push(concatenacion);
        let imagen = document.getElementById("imgMensaje");
        imagen.src = "../resources/img/detectiveEncriptado.png";
        imagen.style.width = "200px";
        let titulo = document.getElementById("histoH3");
        titulo.innerHTML = "Historial de mensajes";
    }

    
    document.getElementById("historial").value = arreglo;
    document.getElementById("form1").reset();

}

function copiar(){
    let copyText =   document.getElementById("historial");
       
        copyText.select();
        copyText.setSelectionRange(0, 99999); 
        navigator.clipboard.writeText(copyText.value);
        document.getElementById("mirar").innerHTML = "Mensaje copiado";

    //Mirar texto copiado
    setTimeout(function(){
        document.getElementById("mirar").innerHTML = "";
    }, 3000);
 
 


    
}

function limpiar(){
      document.getElementById("historial").value = "";
      let imagen = document.getElementById("imgMensaje");
      imagen.src = "resources/img/imgMensaje.svg";
      imagen.style.width = "200px";
      let titulo = document.getElementById("histoH3");
      titulo.innerHTML = "Sin Mensajes";
      arreglo = [];

}
    // var encriptado = CryptoJS.AES.encrypt(texto, "secret key 123");
    // return encriptado.toString();








