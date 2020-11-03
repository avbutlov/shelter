/* eslint-disable import/extensions */
import { get } from './storage.js';
import Keyboard from './Keyboard.js';

const rowsOrder = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Delete', 'Mic'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backspace', 'Mute'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter'],
  ['ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight'],
  ['ControlLeft', 'Win', 'AltLeft', 'Space', 'ArrowLeft', 'ArrowRight', 'ControlRight', 'Close',],
];

const lang = get('kbLang', '"ru"');

new Keyboard(rowsOrder).init(lang).generateLayout();




window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const words = document.querySelector(".output");
const start = document.querySelector('.keyboard__key[data-code="Mic"]');

let rec = new SpeechRecognition();
rec.interimResults = true;


start.addEventListener("click", function() {
    this.classList.toggle('on');
    if(this.classList.contains('on')) {
      rec.start();
      this.innerHTML = '<i class="material-icons">mic</i>';
    } else {
      rec.stop();
      this.innerHTML = '<i class="material-icons">mic_off</i>';
    }


});

rec.addEventListener("result", function(e) {
    let text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    if(e.results[0].isFinal) {
      words.setRangeText(' ', words.selectionStart, words.selectionEnd, "end" );
      words.setRangeText(text, words.selectionStart, words.selectionEnd, "end");
    }
});

rec.addEventListener("end", function(e) {
    (start.classList.contains('on')) ? rec.start() : rec.stop();

});


