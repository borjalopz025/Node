const { log } = require('console');
const fs = require('fs')


const readline = require('readline');

//RETO 1

console.log("menjase 1");

setTimeout(()=>{
    console.log("mensaje 2");
},1000)

setTimeout(() => {
    console.log("mensaje 3");
},2000);


// RETO 2
// • Crea un objeto con las siguientes propiedades: name, surname, age.

// • Utilizando los métodos writeFile y readFile, guarda el objeto en un archivo con extensión .json y lee el
// objeto e imprimelo por consola.

// • Todo ello en una única ejecución de JavaScript. Al hacer cada intento, borra el json anterior antes de
// ejecutar el archivo de nuevo.


let obj = {
    name:'paco',
    surname:'lopez',
    age:30
}

let leerObj = JSON.stringify(obj)

fs.writeFile('test.json', leerObj ,err  =>{
    if(err){
        console.log(err);
    }

    fs.readFile('test.json','utf-8',(err,data) => {
        if(err)
        {
            console.log(err);
        }
            console.log(data);
        }
    )})
    

//RETO 3
    // • Teniendo en cuenta el reto anterior, en vez de rellenar a mano las propiedades del objeto, utiliza el
    // módulo readline de node y solicita los valores del name, surname y age a través de la consola.
    
    // • Con estos tres valores, genera un objeto, guárdalo en un fichero json y léelo utilizando el método
    // readline.
    
    // • Este ejercicio debe hacerse en una única ejecución de JavaScript

  


let rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


rl.question('como te llamas:', nombre => {
    rl.question('como te apellidas:', apellido =>{
        rl.question('que edad tienes', edad =>{
            

let obj2={
    nombre,
    apellido,
    edad
}
let leerObj2 = JSON.stringify(obj2)

fs.writeFile('test2.json', leerObj2 ,err  =>{
    if(err){
        console.log(err);
    }else{

    fs.readFile('test2.json','utf-8',(err,data) => {
        if(err)
        {
            console.log(err);
        }
            console.log(data);
        }
    )}})

    })
    } )
  },)
  
   



