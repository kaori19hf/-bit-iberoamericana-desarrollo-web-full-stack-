const $name= document.getElementById("name");
const $lastName= document.getElementById("lastName");
const $email= document.getElementById("inputEmail");
const $message= document.getElementById("message");
const $adress = document.getElementById("inputAddress");
const $city= document.getElementById("inputCity");
const $btn= document.getElementById("btn");


document.addEventListener("DOMContentLoaded",() =>{
    $btn.addEventListener("click",() =>{
        if ($name.value === ""){
            alert("Nombre no valido");
        }else if($lastName.value === ""){
            alert("Apellido no valido")
        }else if($email.value === ""){
            alert("Email no valido");
        }else if($adress.value === ""){
            alert("Por favor ingresa una direccion valida");  
        }else if($city.value === ""){
            alert("Ciudad no valida");
        }else if($message.value === ""){
            alert("Ingresa un mensaje valido");
        }else{
            location.reload();
            alert("Enviado");

        }
    });
});