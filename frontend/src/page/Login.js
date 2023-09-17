import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginRedux } from "../redux/userSlice";

const serverURL = process.env.REACT_APP_SERVER_DOMAIN;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      const loginUser = await fetch(`${serverURL}/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const { message, type, userInfo } = await loginUser.json();
      if (type === "success") {
        dispatch(loginRedux(userInfo));
        toast.success(`${message} ${userInfo.firstname} ${userInfo.lastname}`);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else if (type === "error") {
        toast.error(message);
      } else {
        return;
      }
    }
  };
  //
  //
  return (
    <div className="p-3 md:p-4">
      <div className=" rounded-lg w-full p-4 max-w-md bg-white m-auto flex flex-col items-center drop-shadow-lg">
        <div className=" text-center text-lg w-20 overflow-hidden rounded-full drop-shadow-md">
          {/* <img src={LoginSignupImage} alt="" className="w-full" /> */}
          <h1 className="w-full">Login</h1>
        </div>
        <form className="mt-7 flex flex-col items-center gap-3" onSubmit={handleSubmit}>
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
            <span className="text-red-300 text-2xl" onClick={handleShowPassword}>
              {showPassword ? <BiHide /> : <BiShow />}
            </span>
          </div>
          <p>
            Not a member?{" "}
            <u className="hover:text-green-600">
              <Link to={"../signup"}>Signup</Link>
            </u>
          </p>
          <button className="flex mx-auto text-white bg-teal-600 border-0 py-2 px-8 focus:outline-none hover:bg-teal-800 rounded text-md">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
