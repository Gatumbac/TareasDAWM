document.addEventListener('DOMContentLoaded', () => {
    addBtnListener();
    addInputListener();
});

let contador = 1;
const colores = ["#FFDFB8", "#A8E6CF", "#FFD3B6", "#D1C4E9", "#F8BBD0", "#C8E6C9", "#B3E5FC", "#FFF9C4"];

function addBtnListener() {
    //Obtencion por ID, CLASSNAME, QUERYSELECTOR, TAG NAME
    const btn = document.getElementById("btnScript");
    const contenedores = document.getElementsByClassName("contenedor");
    const mensaje = document.querySelector("#mensaje");
    const lista = document.querySelector("#lista");
    const totalListItems = document.getElementsByTagName("li");
    console.log(`Hay ${totalListItems.length} elementos de lista en la página.`);
    
    //USO DE QUERY SELECTOR ALL
    const botones = document.querySelectorAll("button");
    botones.forEach(b => {
        b.style.transition = "background-color 0.3s ease"; 
    });

    
    btn.addEventListener('click', () => {   
        btn.style.backgroundColor = "#5CB3FF";
        
        if (contenedores.length > 0) {
            contenedor1 = contenedores[0]; 
            const indiceAleatorio = Math.floor(Math.random() * colores.length);
            const colorSeleccionado = colores[indiceAleatorio];
            contenedor.style.backgroundColor = colorSeleccionado;
        } else {
            alert("No se encontraron contenedores");
        }   
        
        mensaje.textContent = `¡Este es el nuevo mensaje ${contador} modificado con Java Script!`;
        const item = document.createElement("LI");
        item.textContent = `Elemento ${++contador}`;
        lista.appendChild(item);
        
    });
}

function addInputListener() {
    const inputText = document.querySelector("#entradaTexto");
    const outputText = document.querySelector("#salidaTexto");
    
    //Uso de la informacion del evento, parametro de la funcion callback del event listener
    inputText.addEventListener('input', (e) => {
        const input = e.target.value;
        const mensaje = `${input} - ${input.length} caracteres`;
        outputText.textContent = mensaje;
    });
}

