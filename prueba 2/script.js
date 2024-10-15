document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('paymentForm');
    const cardInfo = document.getElementById('cardInfo');
    const qrInfo = document.getElementById('qrInfo');
    const yapeInfo = document.getElementById('yapeInfo');

    const paymentMethods = document.querySelectorAll('input[name="paymentMethod"]');
    paymentMethods.forEach(method => {
        method.addEventListener('change', function () {
            hideAllPaymentInfos();
            if (this.value === 'Tarjeta') {
                cardInfo.classList.add('active');
            } else if (this.value === 'QR') {
                qrInfo.classList.add('active');
            } else if (this.value === 'Yape') {
                yapeInfo.classList.add('active');
            }
        });
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

        let message = `Método de pago seleccionado: ${paymentMethod}`;
        if (paymentMethod === 'Tarjeta') {
            const cardNumber = document.getElementById('cardNumber').value;
            const expiration = document.getElementById('expiration').value;
            const cvv = document.getElementById('cvv').value;
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;

            message += `\nNúmero de tarjeta: ${cardNumber}\nCaducidad: ${expiration}\nCVV: ${cvv}`;
            message += `\nNombre: ${firstName} ${lastName}\nCorreo: ${email}`;
        } else if (paymentMethod === 'QR') {
            message += `\nSe ha generado un código QR para escanear.`;
        } else if (paymentMethod === 'Yape') {
            const phoneNumber = document.getElementById('phoneNumber').value;
            const approvalCode = document.getElementById('approvalCode').value;
            message += `\nNúmero de celular de Yape: ${phoneNumber}`;
            message += `\nCódigo de aprobación de Yape: ${approvalCode}`;
        }

        alert(`Detalles de pago:\n${message}`);
    });

    function hideAllPaymentInfos() {
        cardInfo.classList.remove('active');
        qrInfo.classList.remove('active');
        yapeInfo.classList.remove('active');
    }
document.addEventListener('DOMContentLoaded', function () {
    // Obtén los elementos que contienen la información del evento
    const ticketCountInput = document.getElementById('ticketCount');
    const ticketPriceElement = document.getElementById('ticketPrice');
    const totalAmountElement = document.getElementById('totalAmount');

    // Convertir el precio a número
    const ticketPrice = parseFloat(ticketPriceElement.textContent);

    // Actualiza el total al cargar la página
    updateTotal();

    // Función para actualizar el total
    window.updateTotal = function() {
        const ticketCount = parseInt(ticketCountInput.value);
        const total = ticketCount * ticketPrice;
        totalAmountElement.textContent = total.toFixed(2);
    }

    // Redirige a la página de métodos de pago
    window.redirectToPayment = function() {
        // Aquí puedes agregar más lógica si es necesario
        window.location.href = "payment-methods.html"; // Cambia esto si la ruta es diferente
    }
});

});
