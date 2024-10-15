/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function updateTotal() {
    const quantities = document.querySelectorAll('.ticket-controls input');
    let total = 0;
    let totalQuantity = 0;
    quantities.forEach(input => {
        const quantity = parseInt(input.value, 10);
        const price = parseFloat(input.parentElement.previousElementSibling.querySelector('.ticket-price').textContent.replace('S/', ''));
        total += quantity * price;
        totalQuantity += quantity;
    });
    document.getElementById('total-quantity').textContent = totalQuantity;
    document.getElementById('total-amount').textContent = `S/ ${total.toFixed(2)}`;
    return totalQuantity;
}

function increaseValue(button) {
    const input = button.previousElementSibling;
    let currentValue = parseInt(input.value, 10);
    const totalQuantity = updateTotal();
    if (totalQuantity < 4) {
        input.value = currentValue + 1;
        updateTotal();
    } else {
        alert('Solo puedes seleccionar un máximo de 4 entradas en total.');
    }
}

function decreaseValue(button) {
    const input = button.nextElementSibling;
    let currentValue = parseInt(input.value, 10);
    if (currentValue > 0) {
        input.value = currentValue - 1;
        updateTotal();
    }
}


