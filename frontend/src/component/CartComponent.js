import React from "react";
import { useDispatch } from "react-redux";
import { changeItemQuantity, removeCartProduct } from "../redux/productSlice";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const CartComponent = ({ product }) => {
  const dispatch = useDispatch();
  const { id, name, price, image, quantity } = product;

  const handleCartPlus = (e) => {
    e.preventDefault();
    let quant = quantity + 1;
    dispatch(changeItemQuantity({ id, quant, type: "increase" }));
  };
  const handleCartMinus = (e) => {
    e.preventDefault();
    if (quantity > 1) {
      let quant = quantity - 1;
      dispatch(changeItemQuantity({ id, quant, type: "decrease" }));
    }
  };
  const handleCartProductRemove = () => {
    dispatch(removeCartProduct({ id }));
  };
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          <img
            className="h-36 w-full object-contain object-center"
            src={image}
            alt="content"
          />
          <p className="text-center text-sm">{name}</p>
        </td>
        <td className="px-6 py-4">Rs. {price}</td>
        <td className="px-6 py-4">
          <div className="flex flex-row gap-4 text-2xl">
            <AiFillPlusCircle
              className="mt-1 hover:cursor-pointer hover:text-black"
              onClick={handleCartPlus}
            />
            <i className="">{quantity}</i>
            <AiFillMinusCircle
              className="mt-1 hover:cursor-pointer hover:text-black"
              onClick={handleCartMinus}
            />
          </div>
        </td>
        <td className="px-6 py-4">Rs. {price * quantity}</td>
        <td className="px-6 py-4">
          <button
            onClick={handleCartProductRemove}
            className="bg-blue-700 hover:bg-blue-900 text-base text-white p-2 rounded-md"
          >
            Remove
          </button>
        </td>
      </tr>
    </>
  );
};

export default CartComponent;
