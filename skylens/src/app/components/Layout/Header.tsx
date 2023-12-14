"use client";

import { NextPage } from "next";
import { useState } from "react";
// import "../styles/Header.scss";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";

// export function Header() {
  
// }

const Header: NextPage = () => {
    interface Item {
        name: string;
        path: string;
      }
    
      const Items: Item[] = [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Our services",
          path: "/about",
        },
        {
          name: "Our works",
          path: "/works",
        },
        {
          name: "Agenda",
          path: "/agenda",
        },
        {
          name: "About",
          path: "/about",
        },
        {
          name: "Login",
          path: "/login",
        },
      ];
      const [menuOpen, setMenuOpen] = useState(false);
      const handleClick = () => {
        setMenuOpen(!menuOpen);
      };
    
      return (
        <header className={menuOpen ? "menu-open" : "mobile-version"}>
          <img src="/src/assets/logo/logo.png" alt="SkyLens logo" />
          <IoIosMenu className="menu-burger" onClick={handleClick} />
          <ul className={menuOpen ? "menu-items" : "menu-items mobile-version"}>
            {Items.map((item, index) => (
              <li key={index}>
                <Link to={item.path} onClick={() => {
                  menuOpen && setMenuOpen(false)
                }}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </header>
      );
}
