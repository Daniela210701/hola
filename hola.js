const butonName = document.getElementById('butonName');
const saludo = document.getElementById('saludo');

butonName.addEventListener('click', () => {
    const name = prompt('¿Cuál es tu nombre? ');
    if (name) {
        saludo.innerText = `Hola ${name}`;
    }
});