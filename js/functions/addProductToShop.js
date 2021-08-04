import addProductToBasket from './addProductToBasket.js';
import { addProductForm, productUl } from '../ui/handlers.js';

const addProductToShop = (name, price) => {
  const newLi = document.createElement('li');
  newLi.classList.add('lg:w-1/3', 'md:w-1/2', 'p-4', 'w-full');

  const newA = document.createElement('a');
  newA.classList.add('block', 'relative', 'h-48', 'rounded', 'overflow-hidden');

  const newImg = document.createElement('img');
  newImg.classList.add('object-cover', 'object-center', 'w-full', 'h-full', 'block');
  newImg.src = `https://source.unsplash.com/428x268/?${name}`;
  newImg.alt = name;

  const newDiv = document.createElement('div');
  newDiv.classList.add('flex', 'justify-between');

  const newStrong = document.createElement('strong');
  newStrong.innerText = name;

  const newPriceText = document.createTextNode(`${price.toFixed(2)} $`);

  const newBtn = document.createElement('button');
  newBtn.classList.add('btn-buy');
  newBtn.innerText = 'Add';
  newBtn.addEventListener('click', addProductToBasket);
  newBtn.dataset.name = name;
  newBtn.dataset.price = String(price);

  newA.appendChild(newImg);
  newLi.appendChild(newA);

  newDiv.appendChild(newStrong);
  newDiv.appendChild(newPriceText);
  newDiv.appendChild(newBtn);

  newLi.appendChild(newDiv);

  productUl.appendChild(newLi);
  addProductForm.reset();
};

export default addProductToShop;

//
// <li className="lg:w-1/4 md:w-1/2 p-4 w-full">
//   <a className="block relative h-48 rounded overflow-hidden">
//     <img alt="ecommerce" className="object-cover object-center w-full h-full block"
//          src="https://source.unsplash.com/428x268/?apple">
//   </a>
//   <div className="flex justify-between">
//     <strong>Apple</strong>10 zł
//     <button data-price="10" data-name="apple" className="btn-buy">Dodaj</button>
//   </div>
// </li>
