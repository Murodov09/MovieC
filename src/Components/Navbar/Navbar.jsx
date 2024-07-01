import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import Next_btn from "./next.png";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = ({ movie }) => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);
    if (value === "") {
      setFilteredData([]);
    } else {
      setFilteredData(
        movie.filter((e) => e.title.toLowerCase().includes(value.toLowerCase()))
      );
    }
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <Link to="/">
                  <a className="btn btn-ghost text-xl">MovieC</a>
                </Link>

                <li>
                  <a>Sidebar Item 2</a>
                </li>
                <li>
                  <Link to="/favourite_list">
                    <a>Favourite ⭐</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/">
            <a className="btn btn-ghost text-xl">MovieC</a>
          </Link>
        </div>
        <div className="navbar-end gap-6">
          <label className="input input-bordered flex items-center gap-2">
            <input
              className="grow"
              placeholder="Search"
              value={query}
              onChange={handleSearch}
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70">
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>

          <SignedOut>
            <button className="btn btn-success btn-outline">
              <SignInButton />
            </button>
          </SignedOut>
          <SignedIn>
            <div className="avatar">
              <div className="w-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <UserButton />
              </div>
            </div>
          </SignedIn>
        </div>
      </div>

      {query.trim() !== "" && (
        <div className="scroll-area bg-base-200">
          {filteredData.map((item) => (
            <div className="cover w-100 h-auto bg-black">
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt="Movie"
                className="rounded-xl w-10"
              />
              <h1 key={item.id}>{item.title}</h1>
              <Link to={`/movie_info/${item.id}`}>
                {" "}
                <button className="btn btn-success w-20">
                  <img className="next_btn" src={Next_btn} alt="" />
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
