


const $contador= document.getElementById("contador");
const $incrementar= document.getElementById("incrementbtn");
const $decrementar= document.getElementById("decrementbtn");


let contador = 0;

$contador.textContent = contador;


function incrementar() {
 contador ++;
 $contador.textContent = contador;
}

function decrementar() {
    contador --;
    $contador.textContent= contador;
}


    $incrementar.addEventListener("click", () => {
        incrementar();
        
    });
    $decrementar.addEventListener("click", ()=> {
        decrementar();
        
    });
    
    


 
