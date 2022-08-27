import { NavLink } from "react-router-dom";
import "./NavCategories.css";

const activeStyle = {
  color: "blue",
};

function NavCategories() {
  return (
    <div className="categories">
      <p>
        <NavLink
          to="chairs"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Chairs
        </NavLink>
      </p>
      <p>
        <NavLink
          to="tables"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Tables
        </NavLink>
      </p>
      <p>
        <NavLink
          to="desks"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Desks
        </NavLink>
      </p>
      <p>
        <NavLink
          to="shelfs"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Shelfs
        </NavLink>
      </p>
      <p>
        <NavLink
          to="beds"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Beds
        </NavLink>
      </p>
      <p>
        <NavLink
          to="closets"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Closets
        </NavLink>
      </p>
    </div>
  );
}

export default NavCategories;
