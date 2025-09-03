import React from "react";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="breadcrumb" className="p-2">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Inicio</Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <li
              key={routeTo}
              className="breadcrumb-item active"
              aria-current="page"
            >
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </li>
          ) : (
            <li key={routeTo} className="breadcrumb-item">
              <Link to={routeTo}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
