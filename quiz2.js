// Función para calcular el resultado del quiz
function calculateResult() {
    // Obtener las respuestas seleccionadas
    const q1 = document.querySelector('select[name="q1"]').value;
    const q2 = document.querySelector('select[name="q2"]').value;
    const q3 = document.querySelector('select[name="q3"]').value;

    // Sumar los valores para obtener un puntaje
    const score = parseInt(q1) + parseInt(q2) + parseInt(q3);

    // Definir el resultado según el puntaje
    let resultText;
    if (score <= 4) {
        resultText = "Tu herramienta ideal es Todoist. Te gustan las listas simples para organizar tareas de manera eficiente.";
    } else if (score <= 6) {
        resultText = "Tu herramienta ideal es Trello. Te gusta el sistema de tableros visuales (Kanban) y te beneficia trabajar en equipo.";
    } else if (score <= 8) {
        resultText = "Google Calendar es perfecto para ti. Prefieres una vista de calendario para planificar tus días.";
    } else {
        resultText = "Te recomendamos Notion. Ideal para tareas complejas y organización profunda en equipo o individualmente.";
    }

    // Mostrar el resultado en la página
    document.getElementById("result").innerHTML = `<p>${resultText}</p>`;
}
