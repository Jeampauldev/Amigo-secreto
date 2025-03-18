// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminar espacios en blanco

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);
    
    // Limpiar el campo de entrada
    input.value = "";
    
    // Actualizar la lista en pantalla
    actualizarLista();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de actualizar
    
    // Recorrer el array y agregar los nombres a la lista
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para realizar el sorteo del amigo secreto
function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    
    // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("Debe agregar al menos un nombre para realizar el sorteo.");
        return;
    }
    
    // Seleccionar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el nombre sorteado en la interfaz
    resultado.innerHTML = `<li>🎉 ${amigoSorteado} es el amigo secreto 🎉</li>`;
}
