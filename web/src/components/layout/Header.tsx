import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg py-2 bg-neutral-900 border-b-2 border-neutral-700 relative flex items-center w-full justify-between">
        <div className="px-6 w-full flex flex-wrap items-center justify-between">
          <div className="navbar-collapse collapse grow items-center">
            <ul className="navbar-nav flex flex-row justify-center">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link block pr-2 lg:px-2 py-2 text-neutral-100 hover:text-neutral-200 focus:text-neutral-300 transition duration-150 ease-in-out"
                >
                  Página Inicial
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Icon icon="ph:link-bold" color="white" width="36" />
              </li>
              <li className="nav-item">
                <Link
                  to="/hits/"
                  className="nav-link block pr-2 lg:px-2 py-2 text-neutral-100 hover:text-neutral-200 focus:text-neutral-300 transition duration-150 ease-in-out"
                >
                  Contador cliques
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
