const heart = document.getElementById('heart');
const message = document.getElementById('message');
const buttons = document.getElementById('buttons');

// Asegurarse de que la animación del corazón termine antes de mostrar los elementos
heart.addEventListener('animationend', () => {
    setTimeout(() => {
        message.style.display = 'block';
        buttons.style.display = 'flex';
    }, 500);
});

document.getElementById('yesButton').addEventListener('click', () => {
    alert('¡Sabía que dirías que sí! ❤️');
});

document.getElementById('noButton').addEventListener('click', () => {
    alert('No es una opción válida 💔');
});