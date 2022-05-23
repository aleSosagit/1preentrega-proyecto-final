let titulo = document.getElementById("title");

titulo.innerText = "Bienvenido/a a Mercy!"

let ingreso = prompt("Ingresa tu nombre");

if(!ingreso) {
    prompt("Ingresa tu nombre");
} else {
    titulo.innerText = "Hola " + ingreso + "! " + "\n Bienvenido/a a Mercy!";
};

let submit = document.getElementById("submit")
submit.addEventListener("click", () => { alert("Tus datos fueron ingresados correctamente!");})
