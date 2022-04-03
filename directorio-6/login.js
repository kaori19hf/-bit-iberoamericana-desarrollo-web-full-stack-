const credential = {
    username: "adoptpet1@gp",
    password: "lop"
}

const $username = document.getElementById('username');
const $password = document.getElementById('password');
const $submit= document.getElementById("submit");
const $login=document.getElementById("login");
const $private =document.getElementById("private");


const myCredential ={
    username: null,
    password: null,
};

const handleUsername= (event) =>{
    myCredential.username= event.target.value;
};

const handlePassword = (event) => {
myCredential.password = event.target.value;
}

const handleSubmit = () =>{
        
        const username = myCredential.username === credential.username;
       console.log(username);
        const password = myCredential.password === credential.password;
        console.log(password);
        
        if (username  && password ) {
            window.open("file:///C:/Users/Usuario/Documents/bit-iberoamericana-desarrollo-web-full-stack/directorio-6/private.html");
            
            
        }else if (!username  && !password){
            alert("error");
            
        }
    

    
}


document.addEventListener('DOMContentLoaded', () => {
    $username.addEventListener('input', handleUsername);
    $password.addEventListener('input', handlePassword);
    $submit.addEventListener('click', handleSubmit);
  });