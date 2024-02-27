import React, { useEffect, useState } from "react";
import { LoadingContext } from "../../component/Context";
const Cart = () => {
  const { cart, isCart } = LoadingContext();
  console.log(cart);

  return (
    <>
      <div className="mt-[10rem] flex flex-col items-center px-[5rem] ">
        <h1 className="text-2xl font-bold tracking-wide text-black/80">
          My Shopping Cart
        </h1>
        {/* <div className="  px-5 py-2 bg-white w-full">
          <div className="grid grid-cols-1  md:grid-col-2 ">
            <div>
              <div><img src={}/></div>
              <div></div>
              <div></div>
            </div>
            <div>hello</div>
          </div>
        </div> */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
          <div className="bg-white shadow-md rounded my-6">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Product</th>
                  <th className="py-3 px-6 text-left">Price</th>
                  <th className="py-3 px-6 text-center">Quantity</th>
                  <th className="py-3 px-6 text-center">Total</th>
                  <th className="py-3 px-6 text-center"></th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light"></tbody>
            </table>
          </div>
          <div className="mt-8">
            <div className="text-right">
              <p className="text-xl">Total: $0.00</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
