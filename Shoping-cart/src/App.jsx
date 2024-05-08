import { useState } from "react";

import "./App.css";
import Product from "./Product";

import Footer from "./Footer";

function App() {
  const ProductsData = [
    {
      pic: "denim.jpg",
      pName: "Denim Shirt",
      price: "$100",
      rating: <i class="bi bi-star-fill"></i>,
      description:
        "This classic denim shirt boasts timeless style, perfect for any casual occasion.",
      status: "not added",
    },
    {
      pic: "formal.jpg",
      pName: "Formal Shirt",
      price: "$50",
      rating: <i class="bi bi-star-fill"></i>,
      description:
        "This formal shirt tailoring with refined details that commands attention",
      status: "not added",
    },
    {
      pic: "jogger.jpg",
      pName: "Joggers",
      price: "$120",
      rating: <i class="bi bi-star-fill"></i>,
      description:
        "Jogger pants offer a modern and functional design for an active lifestyle",
      status: "not added",
    },
    {
      pic: "oversize.jpg",
      pName: "Oversize T Shirt",
      price: "$70",
      rating: <i class="bi bi-star-fill"></i>,
      description:
        "This oversized t-shirt delivers laid-back vibes with a contemporary twist",
      status: "not added",
    },
    {
      pic: "gymtrack.jpg",
      pName: "Gym track",
      price: "$90",
      rating: <i class="bi bi-star-fill"></i>,
      description:
        "Ensuring maximum comfort and mobility during training sessions",
      status: "not added",
    },
    {
      pic: "kurtha.jpg",
      pName: "Kurtha",
      price: "$120",
      rating: <i class="bi bi-star-fill"></i>,
      description: "kurtha blends traditional craftsmanship with modern design",
      status: "not added",
    },
    {
      pic: "baggyjeans.jpg",
      pName: "Baggy jean",
      price: "$95",
      rating: <i class="bi bi-star-fill"></i>,
      description:
        "baggy jeans offer a relaxed fit and urban edge, perfect for creating bold",
      status: "not added",
    },
    {
      pic: "brazzer.jpg",
      pName: "Blazer",
      price: "$150",
      rating: <i class="bi bi-star-fill"></i>,
      description:
        "blazer elevates any outfit with its tailored silhouette and timeless elegance.",
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
