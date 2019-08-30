import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <nav
        className=" header navbar navbar-expand-lg navbar-dark bg-dark  "
        style={styles.nav}
      >
        <img src={"./assets/icons/audio-icon.ico"}></img>
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
            <li className="nav-item active ">
              <a className="nav-link " href="#">
                Products
              </a>
            </li>
            <li className="nav-item active ">
              <a className="nav-link " href="#">
                Services
              </a>
            </li>
            <li className="nav-item active ">
              <a className="nav-link " href="#">
                Tutorials
              </a>
            </li>
            <li className="nav-item active ">
              <a className="nav-link " href="#">
                About Us
              </a>
            </li>
            <li className="nav-item active ">
              <a className="nav-link " href="#">
                Contact
              </a>
            </li>
            <li className="nav-item active ">
              <a className="nav-link " href="#">
                Sign In
              </a>
            </li>
            <li className="nav-item active  ">
              <a className="nav-link " href="#">
                Log In
              </a>
            </li>

            {/* <div>
              <button type="button" className="btn btn-light mt-1 ml-4 mr-2 ">
                Sign In
              </button>
              <button type="button" className="btn btn-light mt-1 ml-2 mr-2 ">
                Log In
              </button>
            </div> */}
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
    width: "100%"
  }
};
