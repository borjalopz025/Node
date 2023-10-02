

class Pokemon 
{
    constructor(nombre,imagen,habilidades)
    {
        this.nombre = nombre
        this.imagen = imagen
        this.habilidades = habilidades
        
    }
}

function insertar()
{

    let poke = new Pokemon (document.getElementById("nombre").value, document.getElementById("imagen").value, document.getElementById("habilidades").value)

    console.log(JSON.stringify(poke));
   
    let xhttp = new XMLHttpRequest()

    xhttp.open("POST", "https://pokeapi.co/api/v2/pokemon/1",true)
    xhttp.setRequestHeader("content-type", "apliation/json")
    xhttp.send(JSON.stringify(poke))
}

function mostrar()
{

    let xhttp = new XMLHttpRequest()

    xhttp.onreadystatechange = function (aEvt)
    {
        if(xhttp.readyState == 4 && xhttp.status == 200)
        {
            console.log(xhttp.responseText);
            let js = JSON.parse(xhttp.responseText);
            document.getElementById("mostrar").value = js.name
            console.log(js.name);
            let imagenUrl = js.sprites.back_default
            document.getElementById("imagen").src = imagenUrl
            document.getElementById("imagen").style.display = "block"
            console.log(imagenUrl);
            let habilidades= '';
            for(let i = 0; i < js.abilities.length; i++)
            {
                habilidades += `<div>${ js.abilities[i].ability.name} </div>`
                
            }
            document.getElementById("habilidades").innerHTML = habilidades
            console.log( habilidades);
        }
        else{
            console.log('no funciona ');
        }
    }
    
    xhttp.open("GET","https://pokeapi.co/api/v2/pokemon/1",true)
    xhttp.send()
}
