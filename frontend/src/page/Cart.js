import React from "react";
import { useSelector } from "react-redux";
import CartComponent from "../component/CartComponent";
import { toast } from "react-hot-toast";

const Cart = () => {
  const totalAmount = useSelector((state) => state.product.totalAmount);
  const cartItems = useSelector((state) => state.product.cartList);

  const handleUpdateCart = () => {
    toast.success("Cart Update Success");
  };
  return (
    <>
      <div className="h-max text-slate-700">
        <div>
          <h1 className="text-center mt-7 mb-7 text-3xl text-slate-700 font-bold">
            My Shopping Cart
          </h1>
        </div>
        <div className="mx-auto w-5/6 md:w-2/3">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
                <th scope="col" className="px-6 py-3">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody className="text-lg">
              {cartItems[0] ? (
                cartItems.map((product) => (
                  <CartComponent key={product.id} product={product} />
                ))
              ) : (
                <>
                  <tr className="h-36 bg-white">
                    <td className="px-6 py-4 text-xs" colSpan="2"></td>
                    <td className="px-6 py-4">Your cart is empty :{"("}</td>
                    <td className="px-6 py-4 font-bold text-2xl text-slate-900"></td>
                    <td className="px-6 py-4"></td>
                  </tr>
                  <tr className="h-36 bg-white  border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4 text-xs" colSpan="2"></td>
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4 font-bold text-2xl text-slate-900"></td>
                    <td className="px-6 py-4"></td>
                  </tr>
                </>
              )}
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 text-xs" colSpan="2">
                  *Update Cart to save your Cart Items
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={handleUpdateCart}
                    className="bg-green-600 hover:bg-green-700 text-base text-white py-2 px-4 rounded-md"
                  >
                    Update Cart
                  </button>
                </td>
                <td className="px-6 py-4 font-bold text-2xl text-slate-900">
                  Rs. {totalAmount}
                </td>
                <td className="px-6 py-4"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cart;
