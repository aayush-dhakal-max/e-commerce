import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { setSingleProduct, setItemInCart } from "../redux/productSlice";
import toast from "react-hot-toast";
const serverURL = process.env.REACT_APP_SERVER_DOMAIN;

const ProductDetails = () => {
  const { productID } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const getSingleProduct = await fetch(
        `${serverURL}/products/${productID}`
      );
      const product = await getSingleProduct.json();
      if (product && product.length === 1) {
        dispatch(setSingleProduct(product));
      } else {
        toast.error("No Such product Found");
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const productData = useSelector((state) => state.product.singleProduct);
  const { _id, name, price, description, category, image } = productData;

  const handleAddCart = (e) => {
    dispatch(
      setItemInCart({ id: _id, name, category, price, quantity: 1, image })
    );
  };

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden h-full">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/3 lg:h-auto w-full sm:w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5">
              <img
                alt="ecommerce"
                className="lg:w-full lg:h-auto w-full object-cover rounded"
                src={image}
              />
            </div>
            <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Category: {category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                {name}
              </h1>
              <div className="flex items-center mb-4">
                <span className="flex items-center text-gray-600 mr-3">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span>4 Reviews</span>
                </span>
              </div>
              <p className="leading-relaxed mb-4">{description}</p>
              <div className="flex mt-auto">
                <div className="title-font font-medium text-2xl text-gray-900">
                  Rs. {price}
                </div>
                <button
                  onClick={handleAddCart}
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
