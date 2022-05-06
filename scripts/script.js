const data = [
   {
      id: '1',
      size: 1,
      type: 'normal',
      ru: ['ё', 'Ё'],
      en: ['`', '~']
   },

   {
      id: 'Digit1',
      size: 1,
      type: 'number',
      ru: ['1', '!'],
      en: ['1', '!']
   },
   {
      id: 'Digit2',
      size: 1,
      type: 'number',
      ru: ['2', '"'],
      en: ['2', '@']
   },
   {
      id: 'Digit3',
      size: 1,
      type: 'number',
      ru: ['3', '№'],
      en: ['3', '#']
   },
   {
      id: 'Digit4',
      size: 1,
      type: 'number',
      ru: ['4', ';'],
      en: ['4', '$']
   },
   {
      id: 'Digit5',
      size: 1,
      type: 'number',
      ru: ['5', '%'],
      en: ['5', '%']
   },
   {
      id: 'Digit6',
      size: 1,
      type: 'number',
      ru: ['6', ':'],
      en: ['6', '^']
   },
   {
      id: 'Digit7',
      size: 1,
      type: 'number',
      ru: ['7', '?'],
      en: ['7', '&']
   },
   {
      id: 'Digit8',
      size: 1,
      type: 'number',
      ru: ['8', '*'],
      en: ['8', '*']
   },
   {
      id: 'Digit9',
      size: 1,
      type: 'number',
      ru: ['9', '('],
      en: ['9', '(']
   },
   {
      id: 'Digit0',
      size: 1,
      type: 'number',
      ru: ['0', ')'],
      en: ['0', ')']
   },
   {
      id: 3,
      size: 1,
      type: 'number',
      ru: ['-', '_'],
      en: ['-', '_']
   },
   {
      id: 3,
      size: 1,
      type: 'number',
      ru: ['=', '+'],
      en: ['=', '+']
   },
   {
      id: 'Backspace',
      size: 3,
      type: 'functional',
      ru: ['Backspace', 'Backspace'],
      en: ['Backspace', 'Backspace']
   },
   {
      id: 'Tab',
      size: 2,
      type: 'functional',
      ru: ['Tab', 'Tab'],
      en: ['Tab', 'Tab']
   },
   {
      id: 'KeyQ',
      size: 1,
      type: 'normal',
      ru: ['й', 'Й'],
      en: ['q', 'Q']
   },
   {
      id: 'KeyW',
      size: 1,
      type: 'normal',
      ru: ['ц', 'Ц'],
      en: ['w', 'W']
   },
   {
      id: 'KeyY',
      size: 1,
      type: 'normal',
      ru: ['e', 'E'],
      en: ['у', 'У']
   },
   {
      id: 'KeyR',
      size: 1,
      type: 'normal',
      ru: ['к', 'К'],
      en: ['r', 'R']
   }, {
      id: 'KeyT',
      size: 1,
      type: 'normal',
      ru: ['е', 'Е'],
      en: ['t', 'T']
   },
   {
      id: 'KeyY',
      size: 1,
      type: 'normal',
      ru: ['н', 'Н'],
      en: ['y', 'Y']
   }, {
      id: 'KeyU',
      size: 1,
      type: 'normal',
      ru: ['г', 'Г'],
      en: ['u', 'U']
   },
   {
      id: 'KeyI',
      size: 1,
      type: 'normal',
      ru: ['ш', 'Ш'],
      en: ['i', 'I']
   }, {
      id: 'KeyO',
      size: 1,
      type: 'normal',
      ru: ['щ', 'Щ'],
      en: ['o', 'O']
   },
   {
      id: 'KeyP',
      size: 1,
      type: 'normal',
      ru: ['з', 'З'],
      en: ['p', 'P']
   },
   {
      id: 'BracketLeft',
      size: 1,
      type: 'normal',
      ru: ['х', 'Х'],
      en: ['[', '{']
   },
   {
      id: 'BracketRight',
      size: 1,
      type: 'normal',
      ru: ['ъ', 'Ъ'],
      en: [']', '}']
   },
   {
      id: 'Backslash',
      size: 1,
      type: 'normal',
      ru: ['&#92', '&#47;'],
      en: ['&#92;', '|']
   },
   {
      id: 'Delete',
      size: 1,
      type: 'functional',
      ru: ['DEL', 'DEL'],
      en: ['DEL', 'DEL']
   },
   {
      id: 'CapsLock',
      size: 3,
      type: 'functional',
      ru: ['Caps Lock', 'Caps Lock'],
      en: ['Caps Lock', 'Caps Lock']
   },
   {
      id: 'KeyA',
      size: 1,
      type: 'normal',
      ru: ['ф', 'Ф'],
      en: ['a', 'A']
   },
   {
      id: 'KeyS',
      size: 1,
      type: 'normal',
      ru: ['ы', 'Ы'],
      en: ['s', 'S']
   },
   {
      id: 'KeyD',
      size: 1,
      type: 'normal',
      ru: ['в', 'В'],
      en: ['d', 'D']
   },
   {
      id: 'KeyF',
      size: 1,
      type: 'normal',
      ru: ['а', 'А'],
      en: ['f', 'F']
   }, {
      id: 'KeyG',
      size: 1,
      type: 'normal',
      ru: ['п', 'П'],
      en: ['g', 'G']
   },
   {
      id: 'KeyH',
      size: 1,
      type: 'normal',
      ru: ['р', 'Р'],
      en: ['h', 'H']
   }, {
      id: 'KeyJ',
      size: 1,
      type: 'normal',
      ru: ['о', 'О'],
      en: ['j', 'J']
   },
   {
      id: 'KeyK',
      size: 1,
      type: 'normal',
      ru: ['л', 'Л'],
      en: ['k', 'K']
   }, {
      id: 'KeyL',
      size: 1,
      type: 'normal',
      ru: ['д', 'Д'],
      en: ['l', 'L']
   },
   {
      id: 'Key',
      size: 1,
      type: 'normal',
      ru: ['ж', 'Ж'],
      en: [';', ':']
   },
   {
      id: 'Key',
      size: 1,
      type: 'normal',
      ru: ['э', 'Э'],
      en: ['"', '"']
   },
   {
      id: 'Enter',
      size: 3,
      type: 'functional',
      ru: ['ENTER', 'ENTER'],
      en: ['ENTER', 'ENTER']
   },
   {
      id: 'ShiftLeft',
      size: 3,
      type: 'functional',
      ru: ['SHIFT', 'SHIFT'],
      en: ['SHIFT', 'SHIFT']
   },
   {
      id: 'KeyZ',
      size: 1,
      type: 'normal',
      ru: ['я', 'Я'],
      en: ['z', 'Z']
   },
   {
      id: 'KeyX',
      size: 1,
      type: 'normal',
      ru: ['ч', 'Ч'],
      en: ['x', 'X']
   },
   {
      id: 'KeyC',
      size: 1,
      type: 'normal',
      ru: ['c', 'C'],
      en: ['с', 'С']
   },
   {
      id: 'KeyV',
      size: 1,
      type: 'normal',
      ru: ['м', 'М'],
      en: ['v', 'V']
   }, {
      id: 'KeyB',
      size: 1,
      type: 'normal',
      ru: ['и', 'И'],
      en: ['b', 'B']
   },
   {
      id: 'KeyN',
      size: 1,
      type: 'normal',
      ru: ['т', 'Т'],
      en: ['n', 'N']
   }, {
      id: 'KeyM',
      size: 1,
      type: 'normal',
      ru: ['ь', 'Ь'],
      en: ['m', 'M']
   },
   {
      id: 'Coma',
      size: 1,
      type: 'normal',
      ru: ['б', 'Б'],
      en: [',', '<']
   },
   {
      id: 'Period',
      size: 1,
      type: 'normal',
      ru: ['ю', 'Ю'],
      en: ['.', '>']
   },
   {
      id: 'Slash',
      size: 1,
      type: 'normal',
      ru: ['.', ','],
      en: ['/', '?']
   },
   {
      id: 'ArrowUp',
      size: 1,
      type: 'functional',
      ru: ['^', '^'],
      en: ['^', '^']
   },
   {
      id: 'ShiftRight',
      size: 3,
      type: 'functional',
      ru: ['Shift', 'Shift'],
      en: ['Shift', 'Shift']
   },
   {
      id: 3,
      size: 2,
      type: 'functional',
      ru: ['CTRL', 'CTRL'],
      en: ['CTRL', 'CTRL']
   },
   {
      id: 3,
      size: 1,
      type: 'functional',
      ru: ['WIN', 'WIN'],
      en: ['WIN', 'WIN']
   },
   {
      id: 'AltLeft',
      size: 1,
      type: 'functional',
      ru: ['ALT', 'ALT'],
      en: ['ALT', 'ALT']
   },

   {
      id: 'Space',
      size: 9,
      type: 'functional',
      ru: [' ', ' '],
      en: [' ', ' ']
   },

   {
      id: 3,
      size: 1,
      type: 'functional',
      ru: ['ALT', 'ALT'],
      en: ['ALT', 'ALT']
   },
   {
      id: 'ArrowLeft',
      size: 1,
      type: 'functional',
      ru: ['<', '<'],
      en: ['<', '<']
   },
   {
      id: 'ArrowDown',
      size: 1,
      type: 'functional',
      ru: ['/', '/'],
      en: ['/', '/']
   },
   {
      id: 'ArrowRight',
      size: 1,
      type: 'functional',
      ru: ['>', '>'],
      en: ['>', '>']
   },
   {
      id: 'CtrlRight',
      size: 1,
      type: 'functional',
      ru: ['CTRL', 'CTRL'],
      en: ['CTRL', 'CTRL']
   },

]
/* Class Key */
class Key {
   constructor({ id, size, type, ru, en }) {
      this.id = id;
      this.size = size;
      this.type = type;
      this.ru = ru;
      this.en = en;
   }
   generateKey() {
      let template = '';
      let key = document.createElement('button');
      key.className = 'key'
      key.setAttribute('id', this.id)
      key.classList.add('size' + this.size, this.type)
      if (this.en) {
         template += `<span class='en'>`
         template += `<span class='allDown'> ${this.en[0]}</span>`
         template += `<span class='shiftUp hidden'> ${this.en[1]}</span>`
         if (this.type != 'number') {
            template += `<span class='capsOn hidden'> ${this.en[1]}</span>`
         } else {
            template += `<span class='capsOn hidden'> ${this.en[0]}</span>`
         }
         template += `<span class='shiftCapsOn hidden'> ${this.en[1]}</span>`
         template += `</span>`
      }
      if (this.ru) {
         template += `<span class='ru hidden'>`;
         template += `<span class='allDown'> ${this.ru[0]}</span>`;
         template += `<span class='shifUp hidden'> ${this.ru[1]}</span>`;
         if (this.type != 'number') {
            template += `<span class='capsOn hidden'> ${this.ru[1]}</span>`
         } else {
            template += `<span class='capsOn hidden'> ${this.ru[0]}</span>`
         }
         template += `<span class='shiftCapsOn hidden'> ${this.ru[1]}</span>`;
         template += `</span>`;
      }
      key.innerHTML = template;
      return key
   }
   click() {
      this.addEventListener('click', this.activate)
   }

   activate() {
      this.classList.add('active')
   }
}
/* End class Key */


/*   Start render page */
function addTextarea() {
   let textarea = document.createElement('textarea');
   textarea.classList.add('input__area');
   document.body.append(textarea);
}

const renderKeyboardToDom = () => {
   addTextarea();
   let keyboardWrapper = document.createElement('div');
   keyboardWrapper.className = ('keyboard-wrapper')
   let keyboard = document.createElement('div');
   keyboard.className = ('keyboard')
   keyboardWrapper.appendChild(keyboard);
   document.body.appendChild(keyboardWrapper);
   generateKeys(data).forEach(key => {
      keyboard.append(key.generateKey())
   })

}

const generateKeys = (data) => {
   let keys = [];
   data.forEach(elem => {
      keys.push(new Key(elem))
   });
   return keys
}
/*  End render page */
window.addEventListener('DOMContentLoade', renderKeyboardToDom())

let inputArea = document.querySelector('textarea');
console.log(inputArea);

document.addEventListener('keydown', (event) => onKeyDown(event));
document.addEventListener('keyup', (event) => onKeyUp(event));

let capsOn = false;
let langOn = 'en';
let langOff = 'ru'

function onKeyDown(event) {
   event.preventDefault();
   let activatedBtn = document.getElementById(event.code);
   console.log(event.code)
   if (!(activatedBtn === null)) {
      activatedBtn.classList.add('active');
      if (event.code == 'Enter') {
         inputArea.innerHTML += '\n'
      } else if (event.code == 'Backspace') {
         inputArea.innerHTML = inputArea.innerHTML.slice(0, -1);
      } else if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
         shiftOnChange();
      } else if (event.code == 'CapsLock') {
         capsOnChange();
      } else if (event.code == 'AltLeft') {
         langChange();
      } else {
         inputArea.innerHTML += event.code;
      }

   }
}
function onKeyUp(event) {
   event.preventDefault();
   let activatedBtn = document.getElementById(event.code);
   if (!(activatedBtn === null)) {
      activatedBtn.classList.remove('active');
      if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
         shiftOffChange();
      }
   }
}
function shiftOnChange() {
   // TO DO  проверка на Caps Lock
   //let shiftSpan = document.querySelectorAll('.en>.shiftUp');
   let shiftSpan = document.querySelectorAll(('.' + langOn + '>.shiftUp'));
   let allDownSpan = document.querySelectorAll('.en>.allDown');
   shiftSpan.forEach(el => el.classList.remove('hidden'));
   allDownSpan.forEach(el => el.classList.add('hidden'));

}

function shiftOffChange() {
   // TO DO  проверка на Caps Lock
   let shiftSpan = document.querySelectorAll('.en>.shiftUp');
   let allDownSpan = document.querySelectorAll('.en>.allDown');
   shiftSpan.forEach(el => el.classList.add('hidden'));
   allDownSpan.forEach(el => el.classList.remove('hidden'));
}

function capsOnChange() {
   capsOn = !capsOn
   //console.log('CAPS LOCK')
   let capsSpan = document.querySelectorAll('.capsOn');
   let allDownSpan = document.querySelectorAll('.allDown');
   //console.log(capsSpan, allDownSpan)
   if (capsOn) {
      capsSpan.forEach(el => el.classList.remove('hidden'));
      allDownSpan.forEach(el => el.classList.add('hidden'));
   } else {
      capsSpan.forEach(el => el.classList.add('hidden'));
      allDownSpan.forEach(el => el.classList.remove('hidden'));
   }
}
function langChange() {
   if (langOn == 'en') {
      langOn = 'ru';
      langOff = 'en';
      let allDownSpan = document.querySelectorAll('.en');
      allDownSpan.forEach(el => el.classList.add('hidden'));
      allDownSpan = document.querySelectorAll('.ru');
      allDownSpan.forEach(el => el.classList.remove('hidden'));
   } else {
      langOn = 'en';
      langOff = 'ru';
      let allDownSpan = document.querySelectorAll('.ru');
      allDownSpan.forEach(el => el.classList.add('hidden'));
      allDownSpan = document.querySelectorAll('.en');
      allDownSpan.forEach(el => el.classList.remove('hidden'));
   }
   //let allDownSpan = document.querySelectorAll('.en>.allDown');
   //allDownSpan.forEach(el => el.classList.remove('hidden'));
}

//console.log(shiftChange());