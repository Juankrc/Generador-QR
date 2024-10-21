function generateQRCode() {
    const qrCodeContainer = document.getElementById('qrcode');
    qrCodeContainer.innerHTML = ''; // Limpiar el contenedor de código QR

    const textInput = document.getElementById('text-input').value;
    if (textInput.trim() === '') {
        alert('Please enter some text or a URL to generate the QR code.');
        return;
    }

    new QRCode(qrCodeContainer, {
        text: textInput,
        width: 256,
        height: 256,
    });
}

let mouseTrailInterval; // Variable para almacenar el intervalo

document.addEventListener('mousemove', function (e) {
    // Limpiamos cualquier intervalo previo para evitar que se acumulen
    clearInterval(mouseTrailInterval);

    // Creamos partículas continuamente mientras el ratón se mueve
    mouseTrailInterval = setInterval(() => {
        const trail = document.createElement('div');
        trail.classList.add('trail');
        document.body.appendChild(trail);

        // Posicionar el rastro cerca de la ubicación del cursor con un poco de dispersión
        trail.style.left = `${e.pageX + (Math.random() * 10 - 5)}px`;
        trail.style.top = `${e.pageY + (Math.random() * 10 - 5)}px`;

        // Eliminar el rastro después de que la animación termine
        trail.addEventListener('animationend', () => {
            trail.remove();
        });
    }, 30); // Genera una nueva partícula cada 30 milisegundos
});

// Detener la generación de partículas cuando el ratón deja de moverse
document.addEventListener('mouseleave', function () {
    clearInterval(mouseTrailInterval);
});

