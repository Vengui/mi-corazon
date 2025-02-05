setTimeout(() => {
    document.getElementById('message').style.display = 'block';
    document.getElementById('buttons').style.display = 'block';
}, 5000);

document.getElementById('yesButton').addEventListener('click', () => {
    alert('¡Sabía que dirías que sí! ❤️');
});

document.getElementById('noButton').addEventListener('click', () => {
    alert('No es una opción válida 💔');
});
