const passwordScreen = document.getElementById('password-screen');
const passwordInput = document.getElementById('password-input');
const passwordSubmit = document.getElementById('password-submit');
const mainContent = document.getElementById('main-content');
const heart = document.getElementById('heart');
const message = document.getElementById('message');
const buttons = document.getElementById('buttons');
const noButton = document.getElementById('noButton');

passwordSubmit.addEventListener('click', () => {
    if (passwordInput.value === 'b') {
        passwordScreen.style.display = 'none';
        mainContent.style.display = 'block';
    } else {
        passwordInput.style.border = '2px solid red';
        alert('Contraseña incorrecta. Intenta de nuevo.');
    }
});

heart.addEventListener('animationend', () => {
    setTimeout(() => {
        message.style.display = 'block';
        buttons.style.display = 'flex';
    }, 500);
});

document.getElementById('yesButton').addEventListener('click', () => {
    alert('¡Sabía que dirías que sí! ❤️');
});

noButton.addEventListener('click', () => {
    moveButtonToRandomPosition(noButton);
});

function moveButtonToRandomPosition(button) {
    const heartRect = heart.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const maxX = heartRect.width - buttonRect.width;
    const maxY = heartRect.height - buttonRect.height;

    let randomX, randomY, distance;

    do {
        randomX = Math.random() * maxX;
        randomY = Math.random() * maxY;
        const currentX = button.offsetLeft;
        const currentY = button.offsetTop;
        distance = Math.sqrt(Math.pow(randomX - currentX, 2) + Math.pow(randomY - currentY, 2));
    } while (distance < 50);

    button.style.position = 'absolute';
    button.style.left = `${heartRect.left + randomX}px`;
    button.style.top = `${heartRect.top + randomY}px`;
}