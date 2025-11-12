// TUMBACO SANTANA GABRIEL ALEJANDRO - P1
document.addEventListener('DOMContentLoaded', () => {
    addOperatorsListeners();
    addFormListener();
    addBtnFechasListener();
});

//CALCULADORA INTERACTIVA
function addOperatorsListeners() {
    const botones = document.querySelectorAll('.btnOperacion');
    const pResult = document.getElementById('pResult');
    botones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const operador = e.target.textContent;
            const result = operate(operador);
            pResult.textContent = `Resultado: ${result}`;
        });
    });
}

function operate(operator) {
    const number1 = document.getElementById('number1').value;
    const number2 = document.getElementById('number2').value;
    
    if (number1 == '' || number2 == '') {
        alert('Numero 1 o Numero 2 incorrectos. Ingresa ambos');
        return NaN;
    }
    
    const n1 = Number(number1);
    const n2 = Number(number2);
    let result = 0;
    switch(operator) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            if (n2 == 0) {
                alert('Operacion invalida: No se puede dividir entre cero');
                result = NaN;
            } else {
                result = n1 /  n2;
            }
            break;
        default:
            result = NaN;
    }
    return result;
}

//FORMULARIO DE REGISTRO

function addFormListener(){
    const form = document.getElementById('formRegistro');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validarDatos();
    });
}

function validarDatos() {
    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const fechaNac = document.getElementById('fechaNac').value;
    const pForm = document.getElementById('pForm');
    
    pForm.textContent = "Datos Incorrectos, Formulario No Fue Enviado Correctamente";
    pForm.style.color = 'red';
    
    if (!nombre || !email || !password || !fechaNac) {
        alert('Datos incompletos. Por favor llena todo.');
        return;
    }
    
    if (nombre.length < 3) {
        alert('Nombre debe tener minimo 3 caracteres');
        return;
    }
    
    if (password.length < 6) {
        alert('Password debe tener minimo 6 caracteres');
        return;
    }
    
    if (email.indexOf('@') == -1) {
        alert('Formato email invalido.');
        return;
    }
    
    pForm.textContent = "Datos Correctos, Formulario Fue Enviado Correctamente";
    pForm.style.color = 'green';
    
}

function addBtnFechasListener() {
    const btnFecha = document.getElementById('btnFechas');
    const pFecha = document.getElementById('pFechas');
    
    btnFecha.addEventListener('click', () => {
        const date1 = document.getElementById('date1').value;
        const date2 = document.getElementById('date2').value;
        
        if(!date1 || !date2) {
            alert("Ingresa ambas fechas.");
            return;
        }
        
        const f1 = new Date(date1);
        const f2 = new Date(date2);
        
        // CONVERSION A FECHA Y REGLA PARA CONVERSION DE MS A DIAS.
        
        const diferenciaMs = Math.abs(f2.getTime() - f1.getTime());
        
        const dias = Math.floor(diferenciaMs / (1000 * 60 * 60 *24));
        
        const mensaje = `Diferencia: ${dias} dias`;
        
        pFecha.textContent = mensaje;
    });
}
















