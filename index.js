const a = document.querySelector('#abi');
console.log(a);
//Ading css styling
// a.style.color = 'blue';

// //Adding inner Text
// a.innerText =
//   'Hellow Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, repudiandae';
// a.classList.add('item');
//  console.log(a.getAttribute('class'));

// Adding texts to inner html
const b = document.querySelector('#bis');
console.log(b);
// b.innerText = a.innerText;

// Setting Attributes
// b.setAttribute('class', 'item');
// b.classList.add('cool');

//More Styling
// b.style.marginTop = '20px';

// //Adding Element
// const body = document.querySelector('body');
// const c = document.createElement('h1');
// console.log(c);
// body.append(c); //tis adds the created h1 element to body
// console.log(c.parentElement);
// //Removing Elements
// c.remove();

// //Finding all node children
// const ul = document.querySelector('ul');
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);
// const div = document.querySelector('div');
// console.log(div.childNodes);

// //Finding Child Elements
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// //Styling children. This can be done by (styling child nodes,
// // picking the index of an element that you want to style. Because some indexes are for text nodes
// //and if you pick an indext of a text,
// // it wont style that text because the text is not an element)
// // Or by styling child elements. Here, all indexes are of a particular child element.
// ul.childNodes[1].style.backgroundColor = 'blue';
// ul.children[1].style.backgroundColor = 'red';

// //Finding an Element sibblings
// const li = document.querySelector('li');
// console.log(li);
// console.log(ul.previousSibling);
// console.log(ul.nextSibling);
// console.log(ul.nextElementSibling); //This will ive null because there is no sibbling after the ul

const reveal = document.querySelector('.reveal-btn');
console.log(reveal);

const hidden = document.querySelector('.hidden-content');
console.log(hidden);

const button = document.querySelector('button');
console.log(button);




//Addingan event listener to make a text hidden and also appear.
//This is done using a function that has an if else statement.
// Adding an attribute that has a hidden style set from css or removing the attribute.
//if the hidden attribute is present before click, the text will be hidden. But when button is  clicked, the function removes the hidden attribute, causing the text to be visible.
//If the hidden attribute is absent before click, the text will be visible. But when button is clicked, the function adds the hidden attribute, causing the text to be hidden.
//The function keeps doing this making the text either visible and hidden, depending on the attribute present before click.

const div2 = document.querySelector('.ndiv');
console.log(div2);

function Reveal() {
  if (hidden.classList.contains('reveal-btn')) {
    hidden.classList.remove('reveal-btn');
     button.classList.add('btn');
     button.innerText = 'Read More';
         div2.classList.add('ndiv');
     div2.removeAttribute('id');
  
  } else {
    hidden.classList.add('reveal-btn');
     button.classList.remove('btn');
     button.innerText = 'Read Less';
     div2.classList.remove('ndiv');
     div2.setAttribute('id', 'div2');
       

  }
}
button.addEventListener('click', Reveal);

