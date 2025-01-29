import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Links = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "about", text: "about" },
  { id: 3, url: "products", text: "products" },
  { id: 4, url: "cart", text: "cart" },
  { id: 5, url: "checkout", text: "checkout" },
  { id: 2, url: "orders", text: "orders" },
];

const NavLinks = () => {
  const user = useSelector((state) => state.userState.user);

  return (
    <>
      {Links.map((link) => {
        const { id, url, text } = link;
        if ((url === "orders" || url === "checkout") && !user) return null;
        return (
          <li key={id}>
            <NavLink className="capitalize" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavLinks;
