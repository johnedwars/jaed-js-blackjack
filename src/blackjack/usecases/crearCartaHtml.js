

export const crearCartaHtml = (carta) => {
    const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta'); 

        return imgCarta
}