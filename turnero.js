title.innerHTML = 'Turnos Online - <span>Espacio Psicopedagogía</span>'

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    const datos = {
        nombre: nombre,
        correo: correo,
        fecha: fecha,
        hora: hora
    };

    fetch('/agendar', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function(response) {
        if (response.ok) {
            alert('Cita agendada exitosamente');
        } else {
            alert('Ocurrió un error al agendar la cita');
        }
    })
    .catch(function(error) {
        console.error(error);
    });
});
