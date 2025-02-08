// Obtenemos los elementos necesarios del DOM
const passwordScreen = document.getElementById('password-screen');
const passwordInput = document.getElementById('password-input');
const passwordSubmit = document.getElementById('password-submit');
const mainContent = document.getElementById('main-content');
const heart = document.getElementById('heart');
const smallHeart = document.getElementById('smallHeart');
const nextHeart = document.getElementById('nextHeart');
const message = document.getElementById('message');
const buttons = document.getElementById('buttons');
const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const contentTable = document.getElementById('content-table');
const countdownContainer = document.createElement('div'); // Nuevo contenedor para la cuenta regresiva

// Estilos para el contenedor de cuenta regresiva
countdownContainer.style.position = 'absolute';
countdownContainer.style.left = '50%';
countdownContainer.style.top = '50%';
countdownContainer.style.transform = 'translate(-50%, -50%)';
countdownContainer.style.fontSize = '50px';
countdownContainer.style.fontWeight = 'bold';
countdownContainer.style.display = 'none';
countdownContainer.style.color = 'red';
countdownContainer.innerHTML = `<div>Estas lista para lo que sigue...</div><div id="countdown"></div>`;
document.body.appendChild(countdownContainer);

passwordSubmit.addEventListener('click', () => {
    if (passwordInput.value === 'b') {
        passwordScreen.style.display = 'none';
        mainContent.style.display = 'block';
        nextHeart.style.display = 'block';
        contentTable.style.display = 'block'; // Mostrar la tabla de contenido
    } else {
        passwordInput.style.border = '2px solid red';
        alert('Contraseña incorrecta. Intenta de nuevo.');
    }
});

nextHeart.addEventListener('click', () => {
    startCountdown(5, () => {
        nextHeart.style.display = 'none';
        heart.style.display = 'block';
        smallHeart.style.display = 'block';
        heart.addEventListener('animationend', () => {
            setTimeout(() => {
                message.style.display = 'block';
                buttons.style.display = 'flex';
            }, 500);
        });
    });
});

smallHeart.addEventListener('click', () => {
    heart.style.display = 'none';
    smallHeart.style.display = 'none';
    message.style.display = 'none';
    buttons.style.display = 'none';
    nextHeart.style.display = 'block';
});

yesButton.addEventListener('click', () => {
    message.style.display = 'none';
    buttons.style.display = 'none';
    smallHeart.style.display = 'none';
    showMonitos();
});

noButton.addEventListener('click', () => {
    moveButtonToRandomPosition(noButton);
});

function moveButtonToRandomPosition(button) {
    const heartRect = heart.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    const maxX = heartRect.width - buttonRect.width - 10; // Ajuste para mantener el botón dentro del área visible
    const maxY = heartRect.height - buttonRect.height - 10; // Ajuste para mantener el botón dentro del área visible
    let randomX, randomY, distance;
    do {
        randomX = Math.random() * maxX;
        randomY = Math.random() * maxY;
        const currentX = button.offsetLeft;
        const currentY = button.offsetTop;
        distance = Math.sqrt(Math.pow(randomX - currentX, 2) + Math.pow(randomY - currentY, 2));
    } while (distance < 50);
    button.style.position = 'absolute';
    button.style.left = `${heartRect.left + randomX + 5}px`; // Ajuste para mantener el botón dentro del área visible
    button.style.top = `${heartRect.top + randomY + 5}px`; // Ajuste para mantener el botón dentro del área visible
}

function startCountdown(seconds, callback) {
    const countdownElement = countdownContainer.querySelector('#countdown');
    countdownContainer.style.display = 'block';
    let counter = seconds;

    const countdownInterval = setInterval(() => {
        countdownElement.innerText = counter;
        counter--;

        if (counter < 0) {
            clearInterval(countdownInterval);
            countdownContainer.style.display = 'none';
            callback();
        }
    }, 1000);
}

function showMonitos() {
    const monitos = document.createElement('div');
    monitos.style.position = 'absolute';
    monitos.style.left = '50%';
    monitos.style.top = '50%';
    monitos.style.transform = 'translate(-50%, -50%)';
    monitos.style.zIndex = '1000';
    monitos.innerHTML = `
        <div style="text-align: center;">
            <img src="monitos-beso1.jpeg" alt="Monitos dándose un beso" style="width: 110px; height: auto;">
            <p style="color: dark; font-size: 16px; margin-top: 20px;">Vamos a seguir arriesgandonos juntos</p>
        </div>
    `;
    document.body.appendChild(monitos);

    monitos.querySelector('img').addEventListener('click', () => {
        monitos.style.display = 'none';
        message.style.display = 'block';
        buttons.style.display = 'flex';
        smallHeart.style.display = 'block';
    });
}