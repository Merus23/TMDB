import React from "react";
import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

type Props = {};

function Navbar({}: Props) {
  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> MovieLib
        </Link>
      </h2>

      <form action="">
        <input type="text" placeholder="Busque um filme" />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
}

export { Navbar };
