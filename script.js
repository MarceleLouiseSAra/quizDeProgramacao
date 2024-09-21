var btnSalvar = document.querySelector("#btn");
/*const header = document.querySelector(h1)*/

btnSalvar.addEventListener("click", function(event){
    event.preventDefault();

    const nome = document.querySelector("#nome").value
    const sobrenome = document.querySelector("#sobrenome").value
    const email = document.querySelector("#email").value
    const comentarios = document.querySelector("#comments").value

    /*header.innerHTML = "Cadastro de " + nome + " " + sobrenome"*/
})