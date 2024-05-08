import { useState } from "react";

import "./App.css";
import Product from "./Product";

import Footer from "./Footer";

function App() {
  const ProductsData = [
    {
      pic: "/src/assets/denim.jpg",
      pName: "Denim Shirt",
      price: "$100",
      rating: <i class="bi bi-star-fill"></i>,
      status: "not added",
    },
    {
      pic: "/src/assets/formal.jpg",
      pName: "Formal Shirt",
      price: "$50",
      rating: <i class="bi bi-star-fill"></i>,
      status: "not added",
    },
    {
      pic: "src/assets/jogger.jpg",
      pName: "Joggers",
      price: "$120",
      rating: <i class="bi bi-star-fill"></i>,
      status: "not added",
    },
    {
      pic: "/src/assets/oversize.jpg",
      pName: "Oversize T Shirt",
      price: "$70",
      rating: <i class="bi bi-star-fill"></i>,
      status: "not added",
    },
    {
      pic: "/src/assets/gymtrack.jpg",
      pName: "Gym track",
      price: "$90",
      rating: <i class="bi bi-star-fill"></i>,
      status: "not added",
    },
    {
      pic: "/src/assets/kurtha.jpg",
      pName: "Kurtha",
      price: "$120",
      rating: <i class="bi bi-star-fill"></i>,
      status: "not added",
    },
    {
      pic: "/src/assets/baggyjeans.jpg",
      pName: "Baggy jean",
      price: "$95",
      rating: <i class="bi bi-star-fill"></i>,
      status: "not added",
    },
    {
      pic: "/src/assets/brazzer.jpg",
      pName: "Brazzer",
      price: "$150",
      rating: <i class="bi bi-star-fill"></i>,
      status: "not added",
    },
  ];

  return (
    <div className="">
      <div>
        <Product datas={ProductsData}></Product>
      </div>

      <div className="bg-dark mt-5">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
