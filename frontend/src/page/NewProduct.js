import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Image2B64 } from "../utils/Image2B64";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const serverURL = process.env.REACT_APP_SERVER_DOMAIN;

const NewProduct = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    image: "",
  });
  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  console.log(data);

  const handleImageDisplay = async (e) => {
    if (e.target.files[0].size > 1024000) {
      return toast.error("The image size must be lower than 1 MB");
    } else {
      const data = await Image2B64(e.target.files[0]);
      setData((preve) => {
        return {
          ...preve,
          image: data,
        };
      });
    }
  };

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    const { name, category, price, description, image } = data;
    if (name && category && price && description && image) {
      const productUpload = await fetch(`${serverURL}/product`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const { message, type } = await productUpload.json();
      if (type === "success") {
        toast.success(message);
        setTimeout(() => {
          navigate("/products");
        }, 1000);
      } else if (type === "error") {
        toast.error(message);
      } else {
        return;
      }
    } else {
      toast.error("Enter all product details and Image");
    }
  };
  //
  //
  return (
    <>
      <section className="text-gray-600 h-full body-font mr-32 ">
        <div className="container h-full px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap justify-center">
          <div className="lg:w-1/3 h-4/5 bg-gray-300 rounded-lg sm:mr-10 p-10 justify-start ">
            <label htmlFor="image">
              <span>
                {data.image ? (
                  <img
                    className=" m-auto h-full object-contain"
                    src={data.image}
                    alt=""
                  />
                ) : (
                  <AiOutlineCloudUpload className="w-full h-full" />
                )}
              </span>
              <input
                type="file"
                accept="image/*"
                id="image"
                onChange={handleImageDisplay}
                className="hidden"
                required
              />
            </label>
          </div>
          <form
            onSubmit={handleProductSubmit}
            className="lg:w-1/3 md:w-1/2 bg-white flex flex-col w-full p-3 rounded-sm drop-shadow-lg"
          >
            <h2 className="text-gray-900 text-xl mb-1 font-medium title-font">
              Upload your product
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Enter all information about your product.
            </p>
            <div className="relative mb-3">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name of Product
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleDataChange}
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
            </div>
            <div className="relative mb-3">
              <label
                htmlFor="category"
                className="leading-7 text-sm text-gray-600"
              >
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                required
                onChange={handleDataChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
            </div>
            <div className="relative mb-3">
              <label
                htmlFor="category"
                className="leading-7 text-sm text-gray-600"
              >
                Price (in Rupees)
              </label>
              <input
                type="text"
                id="price"
                name="price"
                required
                onChange={handleDataChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              ></input>
            </div>
            <div className="relative mb-3">
              <label
                htmlFor="description"
                className="leading-7 text-sm text-gray-600"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                required
                onChange={handleDataChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Upload Product
            </button>
            <p className="text-xs pt-2 text-gray-500 ">
              *You agree to all the terms and conditions for selling the product
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default NewProduct;
