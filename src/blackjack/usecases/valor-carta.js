export const valorCarta = (carta) => {
    //optimizado
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;

    //practica

    //if( isNaN(valor)) {
    //    puntos = (valor === 'A') ? 11 : 10;
    //}else {
    //    puntos = valor * 2;
    //}
    //console.log;
}