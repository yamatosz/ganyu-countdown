import Countdown from "./countdown.js";

const tempoParaAGanyu = new Countdown("25 January 2022 18:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo() {
    tempos.forEach((tempo, index) => {
        tempo.innerHTML = tempoParaAGanyu.total[index]
    });
}
mostrarTempo();
setInterval(mostrarTempo, 1000);
