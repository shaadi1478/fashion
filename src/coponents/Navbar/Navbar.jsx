import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="jobs">FASHION</NavLink>
      </li>
      <li>
        <NavLink to="favourite">FAVOURITE</NavLink>
      </li>
      <li>
        <NavLink to="lifestyle">LIFESTYLE</NavLink>
      </li>
    </>
  );
  return (
    <div className="max-w-[1450px] mx-auto">
      <div className="md:navbar flex bg-base-100">
        <div className="md:navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link className="btn btn-ghost ml-6 md:text-2xl text-xl font-bold">FASHION</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="md:justify-end justify-center mt-3 ml-12">
          <Link to='/login' className="md:btn btn-sm bg-black text-white p-2 rounded-xl md:bg-slate-950 md:text-white">SIGN UP</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
