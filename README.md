# shoping-cart

## Description

created a component where user can add different product to the cart and remove from cart

## Tech Stack

**Client:** HTML, CSS, Bootstrap, Javascript, React

## Features

- Live previews
- Cross platform

## Demo

https://shoping-cart-sable.vercel.app/

## Documentation

/\*\*

- Product component that displays a list of products and handles adding and removing them from the cart.
- @param {Object[]} props.datas - An array of objects representing the products. Each object should have the following properties:
- - pic: The URL of the product image.
- - pName: The name of the product.
- - price: The price of the product.
- - rating: The rating of the product.
- - status: The status of the product in the cart. Can be either "added" or "not added".
- @returns {JSX.Element} A JSX element representing the Product component.
  \*/

The Product component uses the useState hook to manage the state of the virtual shopping cart, which is represented by the cartCount variable. This variable is initially set to 0.

The component defines two functions, handleCartAdded and handleRemoveCart, to handle the addition and removal of products from the cart. These functions update the status property of the selected product in the datas array and also update the cartCount state variable.

## Run Locally

Clone the project

```bash
https://github.com/BalavigneshRajasekar/shoping-cart.git
```

Go to the project directory

```bash
  cd Shoping-cart
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
