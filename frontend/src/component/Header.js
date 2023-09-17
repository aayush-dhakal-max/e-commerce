import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import toast from "react-hot-toast";

const Header = () => {
  const cartNumber = useSelector((state) => state.product.cartList.length);
  // console.log(cartNumber);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast.success("LogOut Success ");
  };

  //
  //
  return (
    <header className=" fixed shadow-md w-full h-16 px-2 md:px-4 bg-white z-20 ">
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-10">
            <img className="h-full" src={logo} alt="Logo Here" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <nav className="flex gap-4 md:gap-7 text-base md:text-lg">
            <Link to={""}>Home</Link>
            <Link to={"products"}>Products</Link>
            <Link to={"About"}>About</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className="text-2xl text-slate-700 relative">
            <Link to={"cart"}>
              <BsCartFill />
              <div className="absolute -top-3 -right-1 text-white bg-red-700 h-5 w-4 rounded-full text-center text-sm">
                {cartNumber}
              </div>
            </Link>
          </div>
          <div className=" relative text-slate-700" onClick={handleShowMenu}>
            <div className="cursor-pointer text-3xl">
              {userData.image ? (
                <img
                  src={userData.image}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover p-0.5 ring-2 ring-gray-300 dark:ring-gray-500 hover:ring-gray-600 "
                ></img>
              ) : (
                <HiOutlineUserCircle />
              )}
            </div>
            {showMenu && (
              <div className=" absolute top-10 right-2 bg-cyan-50 p-3 mt-2 text-2xl shadow-md rounded-md">
                {/* If user is loggedin then display Logout */}
                {userData.email ? (
                  <>
                    <Link to={"newproduct"}>
                      <p className="whitespace-nowrap cursor-pointer hover:text-amber-700">
                        New Product
                      </p>
                    </Link>
                    <p
                      className="hover:text-amber-700 whitespace-nowrap cursor-pointer"
                      onClick={handleLogout}
                    >
                      Logout
                    </p>
                  </>
                ) : (
                  <>
                    <Link to={"login"}>
                      <p className="hover:text-amber-700 whitespace-nowrap cursor-pointer">
                        Login
                      </p>
                    </Link>
                    <Link to={"signup"}>
                      <p className="hover:text-amber-700 whitespace-nowrap cursor-pointer">
                        Signup
                      </p>
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
