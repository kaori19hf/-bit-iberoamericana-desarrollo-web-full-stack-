
const $nombre= document.getElementById("nombre");
const $edad= document.getElementById("edad");
const $mayormenor= document.getElementById("mayor-menor");
const $iniciar = document.getElementById("iniciar");

let nombre;
let edad;

let flag = false;

function mayordeedad(edad){
    if(edad=>18){
        return true;
    }else{
        return false;
    }

}

document.addEventListener("DOMContentLoaded",()=>{
    $iniciar.addEventListener("click",() =>{
        nombre= prompt("Cual es tu nombre?");
        $nombre.textContent= nombre;
        

        edad=prompt("Cuantos años tienes?");
        edad=parseInt(edad);
        if(isNaN(edad)){
             alert("Numero no valido");
        }else if (edad<18 ){
            $edad.textContent = edad ;
            $mayormenor.textContent= "No eres mayor de edad"
        }else{
            $edad.textContent =edad ;
            $mayormenor.textContent= "Eres mayor de edad"
        }
        // do{
        //     edad= prompt("Cuantos años tienes?");
        //     edad=parseInt(edad);
        //     if(NaN(edad)){
        //         alert("Numero no valido");
        //     }else if(edad<0 || edad>200){
        //         alert("No valido");
        //     }else if(edad=>18 || edad<200){
        //     }
        //     else{
        //         alert("No puedes ingresar");
        //     }
        // }while (!flag);
      
         });   
    });
