document.addEventListener('DOMContentLoaded', function () {
    const ticketCountInput = document.getElementById('ticketCount'); // Campo de cantidad de entradas
    const ticketPriceElement = document.getElementById('ticketPrice'); // Elemento que muestra el precio por entrada
    const totalAmountElement = document.getElementById('totalAmount'); // Elemento que muestra el total a pagar
    const ticketCategorySelect = document.getElementById('ticketCategory'); // Select para la categoría

    // Inicializa el total al cargar la página
    updateTotal(); // Asegúrate de que el total se muestre correctamente al iniciar

    // Función para actualizar el total
    function updateTotal() {
        const ticketCount = parseInt(ticketCountInput.value); // Obtiene la cantidad de entradas
        const ticketPrice = parseFloat(ticketCategorySelect.value); // Obtiene el precio basado en la categoría seleccionada
        const total = ticketCount * ticketPrice; // Calcula el total
        ticketPriceElement.textContent = ticketPrice.toFixed(2); // Actualiza el precio mostrado
        totalAmountElement.textContent = total.toFixed(2); // Actualiza el total en la interfaz
    }

    // Asocia eventos para actualizar el total
    ticketCountInput.addEventListener('input', updateTotal); // Actualiza el total cuando cambia la cantidad
    ticketCategorySelect.addEventListener('change', updateTotal); // Actualiza el total cuando cambia la categoría

    // Redirige a la página de métodos de pago
    window.redirectToPayment = function() {
        // Aquí puedes agregar más lógica si es necesario
        window.location.href = "pago.html"; // Cambia esto si la ruta es diferente
    }
});
