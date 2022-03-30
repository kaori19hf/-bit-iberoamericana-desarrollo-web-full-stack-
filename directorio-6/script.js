
const $name= document.getElementById("name");
const $email= document.getElementById("email");
const $message= document.getElementById("message");
const $text = document.getElementById("text");
const $btn= document.getElementById("btn");


document.addEventListener("DOMContentLoaded",() =>{
    $btn.addEventListener("click",() =>{
        if ($name.value === ""){
            alert("Nombre no valido");
        }else if($email.value === ""){
            alert("Email no valido");
        }else if($message.value === ""){
            alert("Por favor ingresa un mesaje valido");     
        }else{
            $text.textContent="Mensaje Enviado";
        }

    });
});