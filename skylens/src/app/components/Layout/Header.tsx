"use client";

import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link";
import "../../styles/components/Header.scss"; 
import Icon from "../utils/Icon";

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
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <header className={menuOpen ? "menu-open" : "mobile-version"}>
      {/* <img src="/assets/logo4.png" alt="SkyLens logo" /> */}
      <Icon name="smoke" width="50" height="50" />

      <IoIosMenu className="menu-burger" onClick={handleClick} />
      <ul className={menuOpen ? "menu-items" : "menu-items mobile-version"}>
        {
          Items.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.path} onClick={() => {
                  menuOpen && setMenuOpen(false)
                }}>
                  {item.name}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </header>
  )
}