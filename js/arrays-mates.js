
let mateId;

let carrito = [];

const bienvenida = () => {
    let nombre = prompt("Bienvenido a Mercy! , ingresa tu nombre: ");
    while (nombre === "") {
        nombre = prompt("Bienvenido a Mercy! , ingresa tu nombre: ");
    }
    return nombre;
};


class crearMate {
    constructor(id,nombre, modelo, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.modelo = modelo;
        this.cantidad = cantidad;
    };
};

const matesFlorales = [
    new crearMate(01,"Flores abstractas", "Clásico", 10),
    new crearMate(02,"Flores y luces", "Hexagonal", 15),
    new crearMate(03,"Margaritas", "Clásico", 5),
    new crearMate(04, "Flores gastadas", "Calabaza", 10),
]

const matesGeometricos = [
    new crearMate(01,"Círculos, triángulos y rectángulos", "Hexagonal", 15),
    new crearMate(02,"Triángulos y manchas", "Hexagonal", 13),
    new crearMate(03,"Figuras circulares", "Clásico", 7),
    new crearMate(04,"Triángulos y ojos", "Hexagonal", 15),
]

const matesPersonajes = [
new crearMate(01,"Gokú", "Clásico", 2),
new crearMate(02,"Homero", "Clásico", 3),
new crearMate(03, "Rick and Morty", "Hexagonal", 2),
]


const mostrarMates = () =>{
    let texto = "";
    matesFlorales.forEach((element) => {
        texto += `${element.id}) ${element.nombre}/ Modelo: ${element.modelo}\n`;
    });
    let seleccion = parseInt(prompt(`Cuál vas a llevar? :\n${texto} `));
    while (seleccion < 1 || seleccion > 4) {
        seleccion = parseInt(
            prompt(`Incorrecto !\nCuál vas a llevar? :\n${texto}`));
    }
    return seleccion;
}; 

const productoSeleccionado = (id) => {
    console.log(id);
    let mateFind = matesFlorales.find((element) => element.id == id);
    console.log(mateFind);  

};

bienvenida();
mateId = mostrarMates();
productoSeleccionado(mateId);
