import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../component/ProductCard";
import { useDispatch } from "react-redux";
import { setDataProduct } from "../redux/productSlice";

const serverURL = process.env.REACT_APP_SERVER_DOMAIN;

const Products = () => {
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const handleSeachData = (e) => {
    const { value } = e.target;
    setSearchData((preve) => value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const getAllProducts = await fetch(`${serverURL}/products?prod=${searchData}`);
      const products = await getAllProducts.json();
      dispatch(setDataProduct(products));
    };

    if (buttonClicked) {
      fetchData();
      setButtonClicked(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttonClicked]);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setButtonClicked(true);
  };

  useEffect(() => {
    (async () => {
      const getAllProducts = await fetch(`${serverURL}/products`);
      const products = await getAllProducts.json();
      dispatch(setDataProduct(products));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const productData = useSelector((state) => state.product.productList);

  return (
    <div>
      <form className="mt-5 w-3/6 m-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border rounded-md"
            placeholder="Search Vegetables, Fruits, Fast Foods. . ."
            value={searchData}
            onChange={handleSeachData}
            required
          />
          <button
            type="submit"
            onClick={handleButtonClick}
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <div className="flex flex-wrap mt-10 gap-6 justify-center">
        {productData[0] &&
          productData.map((product) => {
            const { _id, name, category, price, description, image } = product;

            return (
              <div className="hover:drop-shadow-2xl shadow-md overflow-hidden z-0">
                <ProductCard
                  key={_id}
                  id={_id}
                  image={image}
                  name={name}
                  category={category}
                  price={price}
                  description={description}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Products;
