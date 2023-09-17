import React, { useState } from "react";
import LoginSignupImage from "../assets/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { Image2B64 } from "../utils/Image2B64";

import toast from "react-hot-toast";

const serverURL = process.env.REACT_APP_SERVER_DOMAIN;

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
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

  const handleProfileUpload = async (e) => {
    const data = await Image2B64(e.target.files[0]);
    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstname, lastname, email, password } = data;
    if (firstname && lastname && email && password) {
      const signupUser = await fetch(`${serverURL}/signup`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const { message, type } = await signupUser.json();
      if (type === "success") {
        toast.success(message);
        navigate("/login");
      } else if (type === "error") {
        toast.error(message);
      } else {
        return;
      }
    }
  };

  return (
    <div className="p-3 md:p-4">
      <div className=" rounded-lg w-full p-4 max-w-md bg-white m-auto flex flex-col items-center drop-shadow-lg">
        <div className=" text-white w-20 h-20 overflow-hidden rounded-full drop-shadow-lg relative">
          <img
            src={data.image ? data.image : LoginSignupImage}
            alt=""
            className="w-full h-full"
          />

          <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-60 w-full text-center rounded-ss-full rounded-se-full hover:bg-slate-700 cursor-pointer">
              <p className="text-sm p-1">Upload</p>
            </div>
            <input
              type={"file"}
              id="profileImage"
              className="hidden"
              onChange={handleProfileUpload}
              accept="image/*"
            ></input>
          </label>
        </div>

        <form
          className="mt-7 flex flex-col items-center gap-3"
          onSubmit={handleSubmit}
        >
          <input
            type={"text"}
            id="firstname"
            name="firstname"
            className="bg-slate-500 p-2 w-60 rounded-md text-lime-300 outline-teal-200 placeholder-amber-400"
            placeholder="First Name"
            value={data.firstname}
            onChange={handleDataChange}
            required
          ></input>

          <input
            type={"text"}
            id="lastname"
            name="lastname"
            className="bg-slate-500 p-2 w-60 rounded-md text-lime-300 outline-teal-200 placeholder-amber-400"
            placeholder="Last Name"
            value={data.lastname}
            onChange={handleDataChange}
            required
          ></input>

          <input
            type={"email"}
            id="email"
            name="email"
            className="bg-slate-500 p-2 w-60 rounded-md text-lime-300 outline-teal-200 placeholder-amber-400"
            placeholder="Email"
            value={data.email}
            onChange={handleDataChange}
            required
          ></input>

          <div className="flex px-2 py-2 rounded-md bg-slate-500 w-60 focus-within:outline focus-within:outline-teal-200 focus-within:outline-2">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="bg-slate-500 outline-none w-60 rounded-md text-lime-300 placeholder-amber-400"
              placeholder="Password"
              value={data.password}
              onChange={handleDataChange}
              required
            ></input>

            <span
              className="text-red-300 text-2xl"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiHide /> : <BiShow />}
            </span>
          </div>

          <p>
            Already a member?{" "}
            <u className="hover:text-green-600">
              <Link to={"../login"}>Login</Link>
            </u>
          </p>
          <button
            type="submit"
            className="flex mx-auto text-white bg-teal-600 border-0 py-2 px-8 focus:outline-none hover:bg-teal-800 rounded text-md"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
