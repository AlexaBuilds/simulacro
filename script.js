/* ==========================================================================
   TITULO: LOGICA DE CONTROL DE TICKETS Y CONTADOR DEL DOM
   ========================================================================== */

// PASO 1: SELECCIONAR ELEMENTOS CLAVE DEL HTML MEDIANTE SUS IDS
const inputEquipo = document.getElementById('inputEquipo');
const inputProblema = document.getElementById('inputProblema');
const btnAbrirTicket = document.getElementById('btnAbrirTicket');
const listaTickets = document.getElementById('listaTickets');
const contadorTickets = document.getElementById('contadorTickets');

// PASO 2: VARIABLE ACUMULADORA (EL CEREBRO DEL CONTADOR)
let cuentaTicketsAbiertos = 0;

// PASO 3: DETECTAR EL CLICK EN EL BOTÓN ROJO
btnAbrirTicket.addEventListener('click', function() {

    // PASO 4: OBTENER LOS TEXTOS ELIMINANDO ESPACIOS EN BLANCO EXTRAS
    const equipoValor = inputEquipo.value.trim();
    const problemaValor = inputProblema.value.trim();

    // PASO 5: VALIDACIÓN OBLIGATORIA (Si están vacíos manda alerta y frena)
    if (equipoValor === "" || problemaValor === "") {
        alert("Por favor, rellene todos los campos antes de abrir un ticket.");
        return; // Detiene la ejecución por completo
    }

    // PASO 6: CREAR EL ELEMENTO DE LISTA EN MEMORIA (li)
    const liNuevo = document.createElement('li');
    
    // Le aplicamos la clase CSS para que adquiera el borde izquierdo rojo y fondo
    liNuevo.className = 'ticket-item';
    
    // Asignamos el formato de texto idéntico a la captura utilizando negritas
    liNuevo.innerHTML = `<strong>${equipoValor}</strong> : ${problemaValor}`;

    // PASO 7: INYECTAR EL NUEVO LI DENTRO DEL CONTENEDOR UL
    listaTickets.appendChild(liNuevo);

    // PASO 8: ACTUALIZAR EL CONTADOR NUMÉRICO (+1)
    cuentaTicketsAbiertos++;
    contadorTickets.textContent = cuentaTicketsAbiertos;

    // PASO 9: LIMPIAR LOS VALORES DE LOS INPUTS PARA NUEVOS ENTRADAS
    inputEquipo.value = "";
    inputProblema.value = "";
});