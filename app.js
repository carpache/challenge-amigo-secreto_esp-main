// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

console.log(amigos);

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