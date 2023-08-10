import _ from 'underscore'
import { crearDeck,pedirCarta,valorCarta, turnoComputadora, crearCartaHtml} from "./usecases/exports";
/**
 * 2C = Two of clubs 
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

//el patron modulo es muy utilizado para encapsular el codigo de 
//javascript y que no pueda ser corrompido ni manipulado por el 
//usuario final

//se realiza creando y llamando una funcion de manera anonima.

// (() => {

// })();

(() => {
  //use strict tiene muchos beneficios en javascript
  //pero el principal de todos es que se programe de manera correcta
  //declarando y utilizando las funciones de manera correcta.s
  'use strict'

  let deck = [];
  const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

  let puntosJugador = 0,
      puntosComputadora = 0;

  //referencias HTML
  const divCartasJugador = document.querySelector('#jugador-cartas'),
        divCartasComputador = document.querySelector('#computador-cartas');

  const btnNuevo = document.querySelector('#btnNuevo'),
        btnDetener = document.querySelector('#btnDetener'),
        btnPedir = document.querySelector('#btnPedir');
        
  const contadorJ = document.querySelectorAll('small');

 

  deck = crearDeck(tipos, especiales);

  //esta funcion permite tomar una carta


  //pedirCarta();




  //turno de computadora



  //eventos
  btnNuevo.addEventListener('click', () => {
      console.clear();
      deck = [];
      deck = crearDeck(tipos, especiales);

      puntosJugador = 0;
      puntosComputadora = 0;

      contadorJ[0].innerText = 0;
      contadorJ[1].innerText = 0;

      divCartasComputador.innerHTML = '';
      divCartasJugador.innerHTML = '';

      btnPedir.disabled = false;
      btnDetener.disabled = false;
  })

  //detener
  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador,contadorJ[1],divCartasComputador,  deck);
  })



  //cuando una funcion se pone como argumento se llama callback

  btnPedir.addEventListener('click', () => {
      const carta = pedirCarta(deck);

      puntosJugador = puntosJugador + valorCarta(carta);

      contadorJ[0].innerText = puntosJugador;

      const imgCarta = crearCartaHtml(carta);
      divCartasJugador.append(imgCarta);

      if (puntosJugador > 21) {
          console.warn('perdiste');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugador, contadorJ[1], divCartasComputador,  deck);
      } else if (puntosJugador === 21) {
          console.warn('ganaste');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugador, contadorJ[1], divCartasComputador, deck);
      }
  });

})();

