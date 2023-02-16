import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logo2.svg";
// import styles from "./Home.module.css";
// import { GlobalContext } from '../contexts/GlobalContext';

function Navbar({ getInputValue }) {
  const [searchText, setSearchText] = useState("");
  const cartProducts = useSelector((store) => store.cart.value);
  // const { cart } = useContext(GlobalContext);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchText(value);

    getInputValue(searchText);
  };

  // const handleSearchButtonClick = () => {
  //     getInputValue(searchText);
  // }

  let nCartItems = 0;
  cartProducts.forEach((productObj) => {
    nCartItems += productObj.qty;
  });

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-white py-3 shadow-sm">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <input
          placeholder="Type here..."
          value={searchText}
          onChange={handleInputChange}
        />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="buttons">
            <NavLink to="/login" className="btn btn-outline-dark">
              <i className="fa-solid fa-arrow-right-to-bracket me-1"></i> Login
            </NavLink>
            <NavLink to="/signup" className="btn btn-outline-dark ms-2">
              <i className="fa-solid fa-user-plus ms-1"></i> Sign Up
            </NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
              <i className="fa-solid fa-cart-shopping me-1"></i> Cart (0)
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
    // <nav className="navbar navbar-expand-lg bg-body-tertiary bg-white py-3 shadow-sm">
    //   <div className="container-fluid">
    //     <Link to="/">
    //       <img src={logo} alt="Logo" />
    //     </Link>
    //   </div>
    //   <div>
    //     {/* <input
    //       placeholder="Type here..."
    //       value={searchText}
    //       onChange={handleInputChange}
    //     /> */}
    //     {/* <button onClick={handleSearchButtonClick}>Search</button> */}
    //   </div>
    //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
    //       <li className="nav-item">
    //         <Link className="nav-link active" aria-current="page" to="/">
    //           Home
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link " to="/signup">
    //           <p>Products Page</p>
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" to="/cart">
    //           <p>Cart ({nCartItems})</p>
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" to="/about">
    //           About
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" to="/contact">
    //           Contact Us
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="buttons">
    //     <Link to="/login" className="btn btn-outline-dark">
    //       <i className="fa-solid fa-arrow-right-to-bracket me-1"></i> LogIn
    //     </Link>
    //     <Link className="btn btn-outline-dark ms-2" to="/signup">
    //         <i className="fa-solid fa-user-plus ms-1"></i>
    //         SignUp
    //     </Link>
    //   </div>
    // </nav>
  );
}

export default Navbar;
