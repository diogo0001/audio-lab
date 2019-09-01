import React, { Component } from "react";
import "../App.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      dropdownItems: {
        productsColapsed: false,
        servicesColapsed: false,
        tutorialsColapsed: false
      }
    };
  }
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  setProducts = () => {
    this.setState({ productsColapsed: true });
    this.setState({ servicesColapsed: false });
    this.setState({ tutorialsColapsed: false });
  };

  setServices = () => {
    this.setState({ servicesColapsed: true });
    this.setState({ productsColapsed: false });
    this.setState({ tutorialsColapsed: false });
  };

  setTutorials = () => {
    this.setState({ tutorialsColapsed: true });
    this.setState({ productsColapsed: false });
    this.setState({ servicesColapsed: false });
  };

  clearDropdown = () => {
    this.setState({ tutorialsColapsed: false });
    this.setState({ productsColapsed: false });
    this.setState({ servicesColapsed: false });
  };

  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    const menuClassProducts = `dropdown-menu${
      this.state.productsColapsed ? " show" : ""
    }  bg-dark border-dark dropdown-hover`;

    const menuClassServices = `dropdown-menu${
      this.state.servicesColapsed ? " show" : ""
    }  bg-dark border-dark dropdown-hover`;

    const menuClassTutorials = ` dropdown-menu${
      this.state.tutorialsColapsed ? " show" : ""
    } bg-dark border-dark dropdown-hover`;

    return (
      <nav
        className=" header navbar navbar-expand-lg navbar-dark bg-dark  "
        style={styles.nav}
      >
        <img src={"../assets/icons/audio-icon.ico"}></img>
        <a className="navbar-brand " href="#" style={styles.brand}>
          Audio Tech Lab
        </a>
        <button
          onClick={this.toggleNavbar}
          className={`${classTwo}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${classOne}`} id="navbarResponsive">
          <ul className="navbar-nav " style={styles.ul}>
            <li className="ml-auto "></li>

            <li
              className="nav-item dropdown active ml-2 dropdown-hover "
              onMouseOver={this.setProducts}
              onMouseLeave={this.clearDropdown}
              onMouseDownCapture={this.clearDropdown}
            >
              <a
                className="nav-link "
                // href="#"
                id="navbarDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                // onClick={}
              >
                Products
              </a>
              <div
                className={menuClassProducts}
                aria-labelledby="navbarDropdown m-4"
              >
                <a className="dropdown-item text-white dropdown-hover" href="#">
                  Bank of Tracks
                </a>
                <a className="dropdown-item text-white dropdown-hover" href="#">
                  Bank of Samples
                </a>
                <a className="dropdown-item text-white dropdown-hover" href="#">
                  Opening Stickers
                </a>
                <a className="dropdown-item text-white dropdown-hover" href="#">
                  Courses
                </a>
              </div>
            </li>

            <li
              className="nav-item dropdown active ml-2 dropdown-hover"
              onMouseOver={this.setServices}
              onMouseLeave={this.clearDropdown}
              onMouseDownCapture={this.clearDropdown}
            >
              <a
                className="nav-link "
                // href="#"
                id="navbarDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                // onClick={}
              >
                Services
              </a>
              <div
                className={menuClassServices}
                aria-labelledby="navbarDropdown"
              >
                <a className="dropdown-item text-white dropdown-hover" href="#">
                  Studio Online
                </a>
                <a className="dropdown-item text-white dropdown-hover" href="#">
                  Audio Publicity
                </a>
                <a className="dropdown-item text-white dropdown-hover" href="#">
                  Audio Custom Services
                </a>
                <a className="dropdown-item text-white dropdown-hover" href="#">
                  Formats Converter
                </a>
              </div>
            </li>

            <li
              className="nav-item dropdown active ml-2 dropdown-hover"
              onMouseOver={this.setTutorials}
              onMouseLeave={this.clearDropdown}
              onMouseDownCapture={this.clearDropdown}
            >
              <a
                className="nav-link "
                // href="#"
                id="navbarDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                // onClick={}
              >
                Tutorials
              </a>
              <div
                className={menuClassTutorials}
                aria-labelledby="navbarDropdown"
              >
                <a className="dropdown-item text-white dropdown-hover" href="#">
                  Mixing
                </a>
                <a className="dropdown-item text-white dropdown-hover" href="#">
                  Audio Principles
                </a>
                <a className="dropdown-item text-white dropdown-hover" href="#">
                  Electronics Basics
                </a>
                <a className="dropdown-item text-white dropdown-hover" href="#">
                  DSP Basics
                </a>
                <a className="dropdown-item text-white dropdown-hover" href="#">
                  Software Basics
                </a>
              </div>
            </li>

            <li className="nav-item active ml-2 dropdown-hover">
              <a
                className="nav-link "
                // href="#"
              >
                About Us
              </a>
            </li>
            <li className="nav-item active ml-2 dropdown-hover">
              <a
                className="nav-link "
                // href="#"
              >
                Contact
              </a>
            </li>
            <li className="nav-item active ml-2 dropdown-hover">
              <a
                className="nav-link "
                // href="#"
              >
                Sign Up
              </a>
            </li>
            <li className="nav-item active ml-2 dropdown-hover">
              <a
                className="nav-link "
                // href="#"
              >
                Log In
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

const styles = {
  nav: {
    padding: "12px 20px 14px 30px",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    index: "9"
  },
  brand: {
    fontSize: "22px",
    marginLeft: "26px"
  },
  ul: {
    fontSize: "18px",
    width: "100%",
    marginRight: "20px"
  }
};
