'use strict';


const   box = document.getElementById('box'),
        btns = document.getElementsByTagName('button'),
        circles = document.getElementsByClassName('circle'),
        wrapper = document.querySelector('.wrapper'),
        hearts = wrapper.querySelectorAll('.heart'),
        oneHeart = wrapper.querySelector('.heart');
       
        
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

//модификация css классов
div.classList.add('black');

// wrapper.appendChild('div');//ustarevsh


wrapper.append(div); //помещает в конец родителя элемент
// wrapper.prepend(div); //помещает в конец родителя жлемент
// hearts[0].before(div); //do
// hearts[0].after(div); // posle

// wrapper.insertBefore(div, hearts[1]); //ustar

// circles[0].remove(); //udalenie elementa
// wrapper.removeChild(hearts[1]); //ustar

hearts[0].replaceWith(circles[0]); //samena elementa
// wrapper.replaceChild(circles[0], hearts[0]);//ustar


//как добалять элемеенты в html
//пвисать текст
//1) inner html 
div.innerHTML = "<h1>Hello world</h1>";
//2)text content только с текстом работает, без html струтуры
// div.textContent = "hello";


div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');
