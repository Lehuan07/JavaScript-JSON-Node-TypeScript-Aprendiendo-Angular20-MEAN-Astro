
//Eventos son las cosas que suceden cuando estas en la web. 
//Los eventos escuchan lo que pasa en la web y en base a eso, hace lo que le pedimos.

let botoncito = document.querySelector("#botoncito");

botoncito.addEventListener("click", (event) => {
    alert("Asi que sos vivo vo? Que andas molestando")
    console.log(event)
})
