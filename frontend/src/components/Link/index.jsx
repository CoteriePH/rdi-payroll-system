import { NavLink } from "react-router-dom";
import "./Link.css";

function Link({ children, to, ...rest }) {
  return (
    <>
      <li className="list-style">
        <NavLink
          {...rest}
          className="link"
          activeClassName="link-active"
          to={to}
        >
          {children}
        </NavLink>
      </li>
    </>
  );
}

export default Link;
