//Ejercicio 1
function evaluate(number){
    if (number>0)
        return 'Positivo'
    }else if (number < 0){
        return 'Negativo'
    }else{
        return 'Cero'
    }
}

evaluate(5)


//Ejercicio 2 Piedra Papel o Tijera
let jugador1 = prompt("Selecciona un arma")
let jugador2 = prompt("Selecciona un Arma")

if(jugador1 ==="papel" && jugador2 === "piedra"|| jugador1 === "tijeras" && jugador2 === "papel"|| jugador1 ==="piedra" && jugador2 === "tijeras"){
    alert ("Jugador 1 Gano")
}else if(jugador1 === "piedra" && jugador2 === "papel" || jugador1 === "papel" && jugador2 === "tijeras" || jugador1 === "tijeras" && jugador2 === "piedra"){
    alert("Jugador 2 Gana")
}else if(jugador1 === "piedra" && jugador2 === "piedra" || jugador1 === "papel" && jugador2 === "papel" || jugador1 === "tijeras" && jugador2 === "tijeras"){
    alert("Empate")
}else{
    console.log("Error")
    alert("Intentalo de nuevo")
}

//Ejercicio 3 Evalua el Area de un triangulo

const area = (b,h,c)=>{
    return b * h / c
}

console.log(area(2,4,2))

//Ejercicio 4 func resta

const resta = (a,b) =>{
    console.log(a-b);
}

resta(10,100);
resta(1,100);
resta(11,100);
resta(150,100);
resta(100,100);

//Ejercicio 5 func multi

const multiplicacion = (a,b) =>{
    console.log(a*b);
}

multiplicacion(10,100);
multiplicacion(1,100);
multiplicacion(11,100);
multiplicacion(150,100);
multiplicacion(100,100);

//Ejercicio 6 Pares o Impares 0-100

for(let i = 1; i<100; i + 1 ){
    if(i % 2 === 0){
        console.log(i + "Pares")
    }else if(i % 1 === 0){
        console.log(i + "Impares")
    }else{
        console.log('Este numero no deberia existir')
    }
}

//Ejercicio 7 Mayor de edad

let usuario = 200

if(usuario <= 11 || usuario <= 16){
    console.log("Eres un niño")
}else if (usuario >= 17 && usuario <=50){
    console.log("Eres un Adulto")
}else if (usuario >100){
    console.log("No eres humano")
}

//Ejercico 8 Edad de conduccion

let edad = (prompt('Ingresa tu edad'))

if (edad <= 0 || edad <= 15){
    console.log("No puedes conducir")
    alert("No puedes conducir")
}else if( edad >=16 && edad <= 17){
    console.log("Puedes sacar tu permiso")
    alert("Puedes consucur, solo con permiso")
}else if(edad >=18 && edad <=80){
    console.log("Puedes conducir")
    alert("Puedes conducir")
}else{
    console.log('Mejor no lo hgas')
    alert('No lo hagas')
}

//Ejercicio 9 LOG in

let usuario = (prompt("Ingrese su nombre de usuario"))
let validUser = "Charlie Botones"
let password = (prompt("Ingrese su contraseña"))
let validpassword = "perritoSalchicha123"

if (usuario === validUser){ 
    console,log("Acceso Correcto")
    alert(usuario + "Bienvenido a Nuestra pagina")
}else{
    console.log("Acceso Incorrecto")
    alert(usuario + "Acceso Incorrecto")
}

//Ejercico 10 Super Facil Variables

var str = 'Hola Mundo'
var number = 10
var undefinied = undefinied
var perro = 'perrito salchicha'
var bool = true 