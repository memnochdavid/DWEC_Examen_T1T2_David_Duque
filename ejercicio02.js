const switchVocales=(vocal, opc)=>{

    if(opc === "cifrar"){
        vocal.toUpperCase()

    }
    else{
        vocal.toLowerCase()
    }

    switch(vocal){
        case "a":
            return "#";
        case "e":
            return "@";
        case "i":
            return "%";
        case "o":
            return "¿";
        case "u":
            return "ç";
        case "#":
            return "a";
        case "@":
            return "e";
        case "%":
            return "i";
        case "¿":
            return "o";
        case "ç":
            return "u";
        default:
            break;
    }

}
const cifradoIdaVuelta =(mensaje, opc)=>{


    if(opc === "cifrar"){
        mensaje = mensaje.toUpperCase()
        mensaje = mensaje.split("").reverse().join("")
    }
    else{
        mensaje = mensaje.toLowerCase()
        mensaje = mensaje.split("").reverse().join("")
    }

    let vocales = ['A','E','I','O','U','a','e','i','o','u'];

    for(let voc of vocales){
        console.log("debug vocal: ",voc)
        console.log("debug vocal cifrado: ",switchVocales(voc))
        mensaje = mensaje.replaceAll(voc, switchVocales(voc));
    }



    return mensaje;
}



const ejercicio02 = () => {
    let opc = "";
    let opcion ="";
    let mensaje ="";
    let opciones = ["Cifrar","Descifrar","Salir"]


    console.log("Binvenido al cifrador galáctico!")


    while(true){
        console.log("¿Qué quieres hacer?")
        opciones.forEach((opcion, index)=>{
            console.log(index+1 +" - " + opcion)
        })
        opc = parseInt(prompt("Tu elección:"));

        if(opc === 3){
            console.log("Comunicación cerrada");
            break;
        }

        if(opc === 1){
            opcion = "cifrar";
            mensaje = prompt("Escribe tu mensaje:");
            let cifrado = cifradoIdaVuelta(mensaje, opcion);
            console.log("Tu mensaje cifrado: ", cifrado);
            continue;
        }
        if(opc === 2){
            opcion = "descifrar";
            mensaje = prompt("Escribe tu mensaje:");
            let descifrado = cifradoIdaVuelta(mensaje, opcion);
            console.log("Tu mensaje descifrado: ", descifrado);
            // continue;
        }
    }


}