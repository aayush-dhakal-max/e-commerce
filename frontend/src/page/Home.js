import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto px-10 py-20 flex flex-col lg:flex-row justify-between items-center">
      <div className="lg:w-1/2">
        <h1 className="text-5xl font-bold mb-6 text-center lg:text-left">
          The Best E-commerce in your <br />
          <span className="text-blue-700">Hometown</span>
        </h1>
        <p className="text-lg mb-6 text-center lg:text-left">
          Online retailer of fruits and vegetables. It enables individuals to order fruits and vegetables on
          the platform and get them delivered to their doorstep. It also offers chicken, meat, dairy, and
          spices products on the platform.
        </p>
        <div className="text-center lg:text-left">
          <Link
            to="/products"
            className="inline-block px-6 py-3 text-lg font-semibold rounded-md bg-blue-700 hover:bg-blue-800 text-white transition-colors duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>
      <div className="lg:w-1/2 mt-10 lg:mt-0">
        <img
          className="w-full h-auto rounded-md"
          src="https://www.freshproduce.com/siteassets/images/large-tile-images/cartonsoffruit.jpg"
          alt="fruits"
        />
      </div>
    </div>
  );
};

export default Home;
