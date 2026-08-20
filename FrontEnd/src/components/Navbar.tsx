function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <h1 className="text-2xl font-bold text-slate-900">
          Vutur Rajyo
        </h1>

        <div className="flex gap-6 text-sm text-slate-600">
          <a href="#" className="hover:text-slate-900">
            Home
          </a>

          <a href="#" className="hover:text-slate-900">
            Blog
          </a>

          <a href="#" className="hover:text-slate-900">
            About
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;