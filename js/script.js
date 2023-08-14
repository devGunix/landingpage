// Definir o tempo inicial (30 minutos em milissegundos)
let timeRemaining = 30 * 60 * 1000;

const countdownElement = document.getElementById('contador');

const updateCountdownDisplay = () => {
    let minutes = Math.floor(timeRemaining / (60 * 1000));
    let seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);
    
    countdownElement.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

const countdown = setInterval(() => {
    if(timeRemaining <= 0) {
        clearInterval(countdown);
        countdownElement.textContent = "Promoção Encerrada!";
    } else {
        timeRemaining -= 1000; // reduzir o tempo em 1 segundo
        updateCountdownDisplay();
    }
}, 1000);

// Inicializar o display
updateCountdownDisplay();
