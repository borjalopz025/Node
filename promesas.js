const { rejects } = require('assert')
const fs = require('fs/promises')

let obj = {
    name:'paco',
    surname:'lopez',
    age:30
}

 let leerObj = JSON.stringify(obj)

// // fs.writeFile('test.json', leerObj )
// //    .then(() => {
// //     return fs.readFile('test.json','utf-8')
// //    })
// //    .then(data => {
// //     console.log(data);
// //    })
// //    .catch(e => {
// //     console.log(e);
// //    })

// async function asAwTrCa(){

//     try{
//         await fs.writeFile('pro.json',JSON.stringify(obj))
//         let newObj = await fs.readFile('pro.json', 'utf-8')
//         console.log(JSON.parse(newObj));
//     }
//     catch (e){
//         console.log(e);
//     }
// }asAwTrCa()


//////////////////////////////////////////////////////////////////////////////


const readLine = require('node:readline')

function answer(pregunta){
    return new Promise((resolve,reject) => {
        const rl = readLine.createInterface({
            input: process.stdin,
            output: process.stdout,
        })
        rl.question(pregunta,nombre =>{
            resolve(nombre)})
               
    
        })}
    

answer('Como te llamas:')
.then( respuesta => {
    obj.name= respuesta
    return answer('como te apellidas:')
})
.then( respuesta2 => {
    obj.surname=respuesta2
    return answer('Que edad tienes')
})
.then( respuesta3 => {
    obj.edad = respuesta3
})
.then(() =>{

    return fs.writeFile('test.json', JSON.stringify(obj) )
    
})
.then(() => {
    return fs.readFile('test.json','utf-8')
})
.then(data => {
    console.log(data);
})

 .catch(e => {
     console.log(e);
})
