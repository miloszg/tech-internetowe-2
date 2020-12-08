import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <h3 className="section-subheading text-muted">
          Przykładowa sekcja stopki z ikonami do mediów społecznościowych
        </h3>
        <div className="col-md-4">
          <span className="copyright">
            Prawa autorskie &copy; TI LAB 2 2020
          </span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#something">Przykładowy link</a>
            </li>
            <li className="list-inline-item">
              <a href="#something">Przykładowy link</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
