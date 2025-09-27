function obtenerRecordatorio(dia) {
    const actividades = {
        'lunes': 'Los Lunes debo atender un cliente específico.',
        'martes': 'Los Martes visito una agencia fuera de la ciudad.',
        'miercoles': 'Los Miércoles debo llevar a mi hija al ballet.',
        'jueves': 'Los Jueves debo priorizar entregas de desarrollo.',
        'viernes': 'Los Viernes debo atender problemas de manera remota.',
        'sabado': 'Los Sábados debo hacer lo que mi esposa quiera.',
        'domingo': 'Los Domingos son para descansar y planificar la semana.'
    };
    
    return actividades[dia.toLowerCase()] || 'Día no válido. Por favor selecciona un día de la semana.';
}

function mostrarRecordatorio() {
    const diaSeleccionado = document.getElementById('diaSemana').value;
    const resultadoDiv = document.getElementById('resultado');
    
    if (diaSeleccionado) {
        const recordatorio = obtenerRecordatorio(diaSeleccionado);
        resultadoDiv.innerHTML = `
            <div class="actividad">
                <span class="dia">${diaSeleccionado.charAt(0).toUpperCase() + diaSeleccionado.slice(1)}:</span> 
                ${recordatorio}
            </div>
        `;
        resultadoDiv.style.display = 'block';
    } else {
        resultadoDiv.innerHTML = '<p>Por favor selecciona un día de la semana.</p>';
        resultadoDiv.style.display = 'block';
    }
}