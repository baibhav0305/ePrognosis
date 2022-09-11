import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUser, reset, userLogout } from "../../features/userSlice";
import "./Navbar.scss";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(getUser);

  const handleLogout = () => {
    dispatch(userLogout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link className="navbar-brand logoFlex noUnderline" to="/">
          <h1>Logo</h1>
        </Link>
        <div className="navbar-collapse justify-content-center" id="navbarNav">
          <div className="navbar-nav first justify-content-center">
            <Link
              to="/predict"
              className="nav-item nav-link text-uppercase mx-1"
            >
              Predict
            </Link>
            <Link to="/about" className="nav-item nav-link text-uppercase mx-1">
              About
            </Link>
            <a
              href="https://blog-page-three.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              BLOG
            </a>
          </div>
          <div className="navbar-nav">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="nav-item nav-link text-uppercase mx-1"
                >
                  LOGIN
                </Link>
                <Link
                  to="/register"
                  className="nav-item nav-link text-uppercase mx-1 noUnderline bcg"
                >
                  REGISTER
                </Link>
              </>
            ) : (
              <Link
                to="/"
                className="nav-item nav-link text-uppercase mx-1 noUnderline bcg"
                onClick={handleLogout}
              >
                LOGOUT
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
