<em> # Amigo Secreto </em>

el objetivo
es crear u programa para registrar unos nombres de unos amigos e ir añadiendo y despues deciertos nombre es cojer al azar un nombre que esta en la lista 

-la primera funcion es crae un array de la variable amigo:

let amigos [];

para que salga en el consolador 
console.lo(amigos);

crear un afuncion en la caja donde dice a Escribir un nombre 
la funcion que esta relacionada con caja es funcion Agregar amigos

function agregarAmigo (){
    let amigosIngresados = document.getElementById ("amigo").value;
    
    if(amigosIngresados === "" ){
        alert ('por favor, inserte un nombre');

     } else{amigos.push(amigosIngresados);

        document.getElementById("amigo").value = "";

        listaDeAmigos();
        actualizarLista();

        return;

     }
}

con estas funcion se va escribiendo el nombre y con el boton Añadir se va agrupando los nombre 

< para limpiar el campo de la casilla donde se ingresa los nombre es con esta funacion 
    
function limpiarCampo (){
   document.getElementById("amigo").value = "";  
}

<Para cerar la lista de los nombre es con la funcion :>

function listaDeAmigos(){
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for ( let i = 0; i<amigos.length; i++ ){
      let nuevoElemento = document.createElement("li");
      nuevoElemento.textContent = amigos[i];
      listaAmigos.appendChild(nuevoElemento);
  }

}


<escoger de forma al aar el nombre de las lista añadida es:>

function sortearAmigo(){
 if( amigos.length > 0){

let amigosAleatorios  = Math.floor(Math.random()*amigos.length);
  let amigosSorteados = amigos[amigosAleatorios] ;

 const resultado = document.getElementById('resultado');
 resultado.innerHTML = `amigos sorteados :<strong>${amigosSorteados}</strong>`;
 

  listaDeAmigos();

 limpiarCampo();


 }
 

}














