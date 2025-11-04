//
const newPiloto = () => {
    let nombre= prompt('Nombre:');
    let nave =prompt("Nave:")
    let planeta =prompt("Planeta Origen:")
    let exitos = 0//parseInt(prompt("Exitos:"));
    return {
        nombre: nombre,
        nave: nave,
        planetaOrigen: planeta,
        exitos: exitos
    }
}

const muestraPilotos =(pilotos)=>{
    pilotos.forEach((piloto, index) => {
        console.log("Entrada " + index + ":")
        console.log("Nombre: " + piloto.nombre);
        console.log("Nave: " + piloto.nave);
        console.log("Planeta Origen: " + piloto.planetaOrigen);
        console.log("Exitos: " + piloto.exitos);
    })
}
const muestraPiloto =(piloto)=>{
    console.log("Nombre: " + piloto.nombre);
    console.log("Nave: " + piloto.nave);
    console.log("Planeta Origen: " + piloto.planetaOrigen);
    console.log("Exitos: " + piloto.exitos);
}



const muestraMenu=() =>{
    let opciones = ["Nuevo","Listar","Buscar","Exito","Mejor","Salir"];
    console.log("Tus opciones: ");
    opciones.forEach((opcion, index) =>{
        console.log(index+1, opcion);
    })
    return parseInt(prompt("Tu opción: "));
}

const buscaPiloto =(pilotos, nombre)=>{
    return pilotos.find((piloto) => nombre === piloto.nombre);
}

const buscaMejor=(pilotos)=>{
    let mejor = pilotos[0];
    pilotos.forEach((piloto)=>{
        if(piloto.exitos > mejor.exitos){
            mejor = piloto;
        }
    })
    return mejor;
}




const ejercicio01 = () => {
    //array
    let pilotos = [];
    let opcion = "";
    let busqueda ="";
    let found;

    console.log("Bienvenido a la academia galáctica!");
    console.log("Qué deseas hacer?");

    // opcion = prompt("Tu opción: ");

    while(true){
        opcion = muestraMenu();

        if(opcion === 6)break;

        switch(opcion){
            case 1:
                let piloto = newPiloto();
                pilotos.push(piloto);
                break;
            case 2:
                muestraPilotos(pilotos);
                break;
            case 3:
                busqueda = prompt("Buscar: ");
                found = buscaPiloto(pilotos, busqueda);
                if(found) muestraPiloto(found);
                else alert("No ha habido coincidencias!");
                break;
            case 4:
                busqueda = prompt("Buscar: ");
                found = buscaPiloto(pilotos, busqueda);
                if(found) found.exitos ++;
                else alert("No ha habido coincidencias!");
                break;
            case 5:
                console.log(buscaMejor(pilotos));
                break;
        }
    }







}