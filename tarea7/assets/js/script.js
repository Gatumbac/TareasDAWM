document.addEventListener('DOMContentLoaded', () => {
    addBtnsCalcListener();
    addFormListener();
    addBtnFechasListener();
});

function addBtnsCalcListener() {
    const botonesOperaciones = document.querySelectorAll(".btnOperacion");
    const pMensaje = document.getElementById("resultadoCalculadora");
    
    botonesOperaciones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const num1 = document.querySelector("#num1").value;
            const num2 = document.querySelector("#num2").value;

            if (num1.length == 0 || num1.length == 0) {
                alert("Número(s) Inválidos - Ingresa ambos");
                return;
            }
            
            const operacion = e.target.textContent;
            const resultado = operar(parseFloat(num1), parseFloat(num2), operacion);
            const mensaje = `Resultado: ${resultado}`;
            pMensaje.textContent = mensaje;
        });
    });
}

function operar(numero1, numero2, operador) {
    console.log(operador);
    const operadores = ["+", "-", "/", "*"];
    if (!operador || operador.length == 0 || !operadores.includes(operador)) {
        alert("Operador invalido");
        return "Error de operacion";
    }
    
    resultado = 0;
    switch(operador) {
        case '*': 
            resultado = numero1 * numero2;
            break;
        case '+': 
            resultado = numero1 + numero2;
            break;
        case '-': 
            resultado = numero1 - numero2;
            break;
        case '/': 
            if (numero2 == 0) {
                alert("No se puede realizar division para 0");
                resultado = "Indeterminado";
            } else {
                resultado = numero1 / numero2;
            }
            
            break;
    }
    
    return resultado;
}

function addFormListener() {
    const form = document.getElementById("formRegistro");
    form.addEventListener("submit", (e => {
        e.preventDefault();
        handleData();
    }));
}

function handleData() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const fechaNac = document.getElementById("fechaNac").value;

    const validacion = validateFields(name, email, password, fechaNac);
    if (!validacion) {
        return;
    }
    
    const userData = {
        name,
        email,
        password,
        fechaNac
    };
    
    console.log(userData);
    alert("Datos enviados exitosamente. Gracias por registrarte");
}

function validateFields(name, email, password, fechaNac) {
    if (!name || !email || !password || !fechaNac) {
        alert("Datos incompletos. Por favor llena todo.");
        return false;
    }
    
    if (name.length < 4) {
        alert("El nombre debe tener minimo 3 caracteres");
        return false;
    }
    
    if (password.length < 12) {
        alert("El password debe tener minimo 10 caracteres");
        return false;
    }
    
    return true;
}

function addBtnFechasListener() {
    const botonFecha = document.querySelector("#btnFechas");
    const pMensaje = document.getElementById("resultadoFechas");
    
    
    botonFecha.addEventListener('click', () => {
        const fecha1 = document.querySelector("#fecha1").value;
        const fecha2 = document.querySelector("#fecha2").value;
        if (!fecha1 || !fecha2) {
            alert("Fecha(s) Inválidas - Ingresa ambas");
            return;
        }
        
        const f1 = new Date(fecha1);
        const f2 = new Date(fecha2);

        if (isNaN(f1.getTime()) || isNaN(f2.getTime())) {
            alert("Formato de fecha inválido");
            return;
        }
        //se obtiene la fecha en milisegundos desde 1970 y se trabaja con el valor absoluto para evitar negativos
        const diferenciaMs = Math.abs(f2.getTime() - f1.getTime());
        //transformacion de milisegundos a dias
        const dias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
        
        const mensaje = `La diferencia entre ${f1.toLocaleDateString()} y ${f2.toLocaleDateString()} es de ${dias} días.`;
        pMensaje.textContent = mensaje;
    });
}

