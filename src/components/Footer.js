import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/*Colum1*/}
            <div className="col-md-3 col-sm-6 ">
              <h5>Products</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Tracks Banks</a>
                </li>
                <li>
                  <a href="/">Samples Banks (Free)</a>
                </li>
                <li>
                  <a href="/">Opening Stickers (Free)</a>
                </li>
                <li>
                  <a href="/">Courses</a>
                </li>
              </ul>
            </div>
            {/*Colum2*/}
            <div className="col-md-3 col-sm-6">
              <h5>Services</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Studio Online</a>
                </li>
                <li>
                  <a href="/">Audio for Marketing Online</a>
                </li>
                <li>
                  <a href="/">Personal Mix</a>
                </li>
                <li>
                  <a href="/">Formats Converter (Free)</a>
                </li>
              </ul>
            </div>
            {/*Colum3*/}
            <div className="col-md-3 col-sm-6">
              <h5>Tutorials</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Mixing</a>
                </li>
                <li>
                  <a href="/">Audio</a>
                </li>
                <li>
                  <a href="/">Electronics Basics</a>
                </li>
                <li>
                  <a href="/">DSP Basics</a>
                </li>
                <li>
                  <a href="/">Software Basics</a>
                </li>
              </ul>
            </div>
            {/*Colum4*/}
            <div className="col-md-3 col-sm-6">
              <h5>Social Media</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Instagram</a>
                </li>
                <li>
                  <a href="/">Facebook</a>
                </li>
                <li>
                  <a href="/">Youtube</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer */}
          <div
            className="footer-bottom"
            style={{
              display: "flex",
              justifyContent: "center"
            }}
          >
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
    padding-top: 2rem;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  ul li a {
    color: var(--mainWhite);
  }
  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;
