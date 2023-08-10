import _ from 'underscore'

//la palabra export sirve para que piodamos usar
//funciones que esten en otro archivo y de la misma 
//forma tendriamos que importarlo en el archivo que 
//vayamos a utilizar.

/**
 * 
 * @param {Array<string>} tiposcartas 
 * @param {Array<string>} tiposespeciales 
 * @returns {Array}
 */
export const crearDeck = (tiposcartas, tiposespeciales) => {
    
    let deck = [];
    
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposcartas) {
            deck.push(i + tipo);
        }
    }
    for (let tipo of tiposcartas) {
        for (let esp of tiposespeciales) {
            deck.push(esp + tipo);
        }
    }

    //console.log(deck);
    deck = _.shuffle(deck);
    return deck;
}
