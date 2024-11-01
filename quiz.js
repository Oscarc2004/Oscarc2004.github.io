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
        resultText = "Eres un Organizador Estructurado. Prefieres listas y métodos organizativos que te mantengan en control.";
    } else if (score <= 6) {
        resultText = "Eres un Organizador Flexible. Te adaptas a las circunstancias y usas métodos diferentes según la situación.";
    } else {
        resultText = "Eres un Planificador Espontáneo. Prefieres una aproximación más libre a la organización y disfrutas de cierta espontaneidad.";
    }

    // Mostrar el resultado en la página
    document.getElementById("result").innerHTML = `<p>${resultText}</p>`;
}
