import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-md-4 text-right">
            <h4>Follow Us</h4>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FaTwitter />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <p>123 Main St, New York, NY 10001</p>
            <p>info@example.com</p>
            <p>(123) 456-7890</p>
          </div>
        </div>
      </div>
      <div className="bg-secondary py-2">
        <div className="container">
          <p className="m-0 text-center text-white">
            © 2023 Your Website Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
