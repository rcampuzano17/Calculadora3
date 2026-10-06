document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let startDateTime = new Date(document.getElementById('startDateTime').value);
    let timeToSubtract = parseInt(document.getElementById('timeToSubtract').value);

    if (isNaN(timeToSubtract) || timeToSubtract <= 0) {
        alert("Por favor, seleccione un tiempo válido para restar.");
        return;
    }

    let result = subtractBusinessMinutes(startDateTime, timeToSubtract);

    document.getElementById('finalDateTime').textContent = result.toLocaleString();
});

function subtractBusinessMinutes(startDate, totalMinutes) {
    let minutesSubtracted = 0;
    let date = new Date(startDate);

    while (minutesSubtracted < totalMinutes) {
        date.setMinutes(date.getMinutes() - 1);
        let currentHour = date.getHours();

        if (currentHour >= 6 && currentHour < 18) {
            minutesSubtracted++;
        }

        // Para manejar el caso de minutos en la última hora
        if (minutesSubtracted >= totalMinutes) {
            break;
        }
    }

    return date;
}