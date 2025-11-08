document.addEventListener('DOMContentLoaded', () => {
    addBtnsListeners();
});

const divEstado = document.getElementById('ajaxEstado');
const divContenido = document.getElementById('ajaxContenido');

function addBtnsListeners() {
    const btnCargar = document.getElementById('btnCargar');
    const btnLimpiar = document.getElementById('btnLimpiar');

    
    btnCargar.addEventListener('click', cargarDatos);
    btnLimpiar.addEventListener('click', limpiarContenido);
}

function cargarDatos() {
    divEstado.textContent = "Cargando datos...";
    divContenido.innerHTML = "";
    
    //Simular que los datos demoran en cargar porque vienen del servidor
    //se usa un timeout y luego fetch con el pipeline de promesas
    setTimeout(() => {
        fetch('./assets/data/datos.json')
            .then(response => {
                if (!response.ok) throw new Error('Error al cargar los datos');
                return response.json();
            })
            .then(data => {
                divEstado.textContent = "Datos cargados correctamente";
                mostrarDatos(data);
            })
            .catch(error => {
                divEstado.textContent = "Error: " + error.message;
            });
    }, 3000);
}

function mostrarDatos(data) {
    //La lista de items se mapea a codigo html y luego de junta en una sola cadena con join
    const html = `
      <h2>${data.titulo}</h2>
      <p>${data.descripcion}</p>
      <ul>
        ${data.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
    
    divContenido.innerHTML = html;
}

function limpiarContenido() {
    divEstado.textContent = "";
    divContenido.innerHTML = "";
}


