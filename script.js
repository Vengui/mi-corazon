const passwordScreen = document.getElementById('password-screen');
const passwordInput = document.getElementById('password-input');
const passwordSubmit = document.getElementById('password-submit');
const mainContent = document.getElementById('main-content');
const heart = document.getElementById('heart');
const message = document.getElementById('message');
const buttons = document.getElementById('buttons');
const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

passwordSubmit.addEventListener('click', () => {
    if (passwordInput.value === 'c') {
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

yesButton.addEventListener('click', () => {
    // Oculta la pregunta y los botones
    message.style.display = 'none';
    buttons.style.display = 'none';

    // Agrega los monitos y el mensaje
    showMonitos();
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

function showMonitos() {
    const monitos = document.createElement('div');
    monitos.style.position = 'absolute';
    monitos.style.left = '50%';
    monitos.style.top = '45%';
    monitos.style.transform = 'translate(-50%, -50%)';
    monitos.style.zIndex = '1000'; // Asegura que la imagen esté al frente
    monitos.innerHTML = `
        <div style="text-align: center;">
            <img src="monitos-beso1.jpeg" alt="Monitos dándose un beso" style="width: 110px; height: auto;">
            <p style="color: dark; font-size: 16px; margin-top: 20px;">Vamos a seguir arriesgandonos juntos</p>
        </div>
    `;
    document.body.appendChild(monitos);
}
