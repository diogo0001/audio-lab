import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/*Colum1*/}
            <div className="col-md-3 col-sm-6">
              <h5>Products</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Online Mix</a>
                </li>
                <li>
                  <a href="/">Personal mix</a>
                </li>
                <li>
                  <a href="/">Electronics</a>
                </li>
                <li>
                  <a href="/">Software</a>
                </li>
              </ul>
            </div>
            {/*Colum2*/}
            <div className="col-md-3 col-sm-6">
              <h5>Services</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Online Mix</a>
                </li>
                <li>
                  <a href="/">Personal mix</a>
                </li>
                <li>
                  <a href="/">Electronics</a>
                </li>
                <li>
                  <a href="/">Software</a>
                </li>
              </ul>
            </div>
            {/*Colum3*/}
            <div className="col-md-3 col-sm-6">
              <h5>Tutorials</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Online Mix</a>
                </li>
                <li>
                  <a href="/">Personal mix</a>
                </li>
                <li>
                  <a href="/">Electronics</a>
                </li>
                <li>
                  <a href="/">Software</a>
                </li>
              </ul>
            </div>
            {/*Colum4*/}
            <div className="col-md-3 col-sm-6">
              <h5>Contact</h5>
              <ul className="list-unstyled">
                <li>Online Mix</li>
                <li>Personal mix</li>
                <li>Electronics</li>
                <li>Software</li>
              </ul>
            </div>
          </div>
          {/* Footer */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Audio Tech Lab - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
  ul li a {
    color: var(--mainWhite);
  }
  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;
