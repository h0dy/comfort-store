import { NavLink } from "react-router-dom";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { AiOutlineShopping } from "react-icons/ai";
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";

const themes = {
  light: "cupcake",
  dark: "dracula",
  valentine: "valentine",
};

const getThemeLocalStorage = () => {
  return localStorage.getItem("theme") || themes.light;
};

const Navbar = () => {
  const [theme, setTheme] = useState(getThemeLocalStorage);

  const handleTheme = () => {
    const { light, dark, valentine } = themes;
    const newTheme = theme === light ? dark : light;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element container">
        <div className="navbar-start">
          {/* TITLE */}
          <NavLink
            to="/"
            className="hidden md:flex btn btn-primary text-3xl items-center"
          >
            CS
          </NavLink>
          {/* DROPDOWN */}
          <div className="dropdown">
            <label htmlFor="" tabIndex={0} className="btn btn-ghost md:hidden">
              <HiOutlineBars3BottomLeft className="size-8" />
            </label>
            <ul tabIndex={0} className="dropdown-links">
              <NavLinks />
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end">
          {/* THEM SETUP */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            {/* MOON ICON*/}
            <FaMoon className="swap-off size-5" />
            {/* SUN ICON*/}
            <FaSun className="swap-on size-5" />
          </label>

          {/* CART LINK */}
          <NavLink to="/cart" className="btn-cart">
            <div className="indicator">
              <AiOutlineShopping className="size-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                12
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
