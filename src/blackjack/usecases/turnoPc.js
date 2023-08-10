
import { crearCartaHtml, pedirCarta, valorCarta} from "./exports";



export const turnoComputadora = (puntosMinimos,contadorJ, divCartasComputador, deck = []) => {


    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);

        contadorJ.innerText = puntosComputadora;

        const imgCarta = crearCartaHtml(carta);
        divCartasComputador.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }
    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Empate');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana');
        } else if (puntosComputadora > 21) {
            alert('Jugador gana');
        } else {
            alert('Computadora gana')
        }
    }, 15);
}
