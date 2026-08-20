import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          to="/"
          className="text-2xl font-bold text-slate-900"
        >
          Vutur Rajyo
        </Link>

        <div className="flex gap-6 text-sm text-slate-600">
          <Link
            to="/"
            className="hover:text-slate-900"
          >
            Home
          </Link>

          <Link
            to="/"
            className="hover:text-slate-900"
          >
            Blog
          </Link>

          <Link
            to="/about"
            className="hover:text-slate-900"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;