// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];
const MAX_AMIGOS = 10; // Límite de nombres permitidos

// Detectar la tecla Enter para agregar amigos
document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let contador = document.getElementById("contador");
    let nombre = input.value.trim(); // Eliminar espacios en blanco

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validar que no se exceda el límite de nombres
    if (amigos.length >= MAX_AMIGOS) {
        alert("No puede agregar más de " + MAX_AMIGOS + " amigos.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);
    
    // Limpiar el campo de entrada
    input.value = "";
    
    // Actualizar la lista en pantalla
    actualizarLista();
    
    // Actualizar contador
    contador.textContent = `Amigos restantes: ${MAX_AMIGOS - amigos.length}`;
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
    let botonSorteo = document.getElementById("botonSorteo");
    let nuevoSorteo = document.getElementById("nuevoSorteo");
    
    // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("Debe agregar al menos un nombre para realizar el sorteo.");
        return;
    }
    
    // Contador regresivo antes del sorteo
    let contador = 3;
    resultado.innerHTML = `<li>Iniciando sorteo en ${contador}...</li>`;
    
    let intervalo = setInterval(() => {
        contador--;
        resultado.innerHTML = `<li>Iniciando sorteo en ${contador}...</li>`;
        
        if (contador === 0) {
            clearInterval(intervalo);
            
            // Seleccionar un índice aleatorio
            let indiceAleatorio = Math.floor(Math.random() * amigos.length);
            let amigoSorteado = amigos[indiceAleatorio];
            
            // Mostrar el nombre sorteado en la interfaz
            resultado.innerHTML = `<li>🎉 ${amigoSorteado} es el amigo secreto 🎉</li>`;
            
            // Ocultar botón de sorteo y mostrar nuevo sorteo
            botonSorteo.style.display = "none";
            nuevoSorteo.style.display = "block";
        }
    }, 1000);
}

// Función para preguntar si usar la misma lista o crear una nueva
function preguntarNuevaLista() {
    let usarMismaLista = confirm("¿Quieres usar la misma lista de amigos para el próximo sorteo?");
    if (!usarMismaLista) {
        reiniciarSorteo();
    } else {
        document.getElementById("resultado").innerHTML = "";
        document.getElementById("botonSorteo").style.display = "block";
        document.getElementById("nuevoSorteo").style.display = "none";
    }
}

// Función para reiniciar el sorteo
function reiniciarSorteo() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("contador").textContent = `Amigos restantes: ${MAX_AMIGOS}`;
    document.getElementById("botonSorteo").style.display = "block";
    document.getElementById("nuevoSorteo").style.display = "none";
}