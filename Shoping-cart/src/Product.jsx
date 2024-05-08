import React, { useState } from "react";
import Nav from "./Nav";
import Banner from "./Banner";

function Product(props) {
  const [cartCount, setCartCount] = useState(0);
  // This function take care once user clicked "ADD to cart BTN"

  function handleCartAdded(index, status) {
    //Here we change the stauts in the props object in order to show the "REMOVE CART BTN"
    let updateStatus = props.datas.map((value, i) => {
      if (i == index) {
        value.status = status;
      }
      return value;
    });
    //This state will + 1 with previous state and render the component to show the updated contents
    setCartCount(1 + cartCount);
  }

  // This function take care once user clicked "Remove cart BTN"
  function handleRemoveCart(index, status) {
    //Here we change the stauts in the props object in order to show the "ADD TO CART BTN"
    let updateStatus = props.datas.map((value, i) => {
      if (i == index) {
        value.status = status;
      }
      return value;
    });
    //This state will - 1 with previous state and render the component to show the updated contents
    setCartCount(cartCount - 1);
  }

  return (
    <div>
      <Nav cartData={cartCount}></Nav>
      <Banner></Banner>
      <div className="row pe-2 mt-2 ms-md-5 mb-5 ms-1 justify-content-center">
        {props.datas.map((value, index) => {
          return (
            <div key={index} className="col-6  col-md-4 col-lg-3 mt-5">
              <div
                className="card rounder-5 text-center shadow-lg"
                style={{ width: "190px" }}
              >
                <img src={value.pic} class="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">{value.pName}</h5>
                  <p className="card-text">
                    {value.rating}
                    {value.rating}
                    {value.rating}
                    {value.rating}
                    {value.rating}
                  </p>
                  <p>{value.price}</p>
                  {/*Initially the status value is not added so "Add to cart BTN" is shown 
                  once the status value is added the "remove cart BTN" will shown  */}
                  {value.status == "added" ? (
                    <button
                      name={index}
                      className="btn btn-outline-dark"
                      onClick={() =>
                        handleRemoveCart(
                          index,
                          value.status == "added" ? "not added" : "added"
                        )
                      }
                    >
                      Remove cart
                    </button>
                  ) : (
                    <button
                      name={index}
                      className="btn btn-outline-dark "
                      onClick={() =>
                        handleCartAdded(
                          index,
                          value.status == "not added" ? "added" : "not added"
                        )
                      }
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
