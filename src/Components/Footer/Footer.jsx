import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="widget widget-about">
                <img
                  src="assets/images/demos/demo-3/logo-footer.png"
                  className="footer-logo"
                  alt="Footer Logo"
                  width="105"
                  height="25"
                />
                
                <p>
                  Praesent dapibus, neque id cursus ucibus, tortor neque egestas
                  augue, eu vulputate magna eros eu erat.{" "}
                </p>

                <div className="widget-call">
                  <i className="icon-phone"></i>
                  Got Question? Call us 24/7
                  <Link href="tel:#">+0123 456 789</Link>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4 className="widget-title">Useful Links</h4>

                <ul className="widget-list">
                  <li>
                    <Link href="about.html">About Molla</Link>
                  </li>
                  <li>
                    <Link href="#">Our Services</Link>
                  </li>
                  <li>
                    <Link href="#">How to shop on Molla</Link>
                  </li>
                  <li>
                    <Link href="faq.html">FAQ</Link>
                  </li>
                  <li>
                    <Link href="contact.html">Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4 className="widget-title">Customer Service</h4>

                <ul className="widget-list">
                  <li>
                    <Link href="#">Payment Methods</Link>
                  </li>
                  <li>
                    <Link href="#">Money-back guarantee!</Link>
                  </li>
                  <li>
                    <Link href="#">Returns</Link>
                  </li>
                  <li>
                    <Link href="#">Shipping</Link>
                  </li>
                  <li>
                    <Link href="#">Terms and conditions</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="widget">
                <h4 className="widget-title">My Account</h4>

                <ul className="widget-list">
                  <li>
                    <Link href="#">Sign In</Link>
                  </li>
                  <li>
                    <Link href="cart.html">View Cart</Link>
                  </li>
                  <li>
                    <Link href="#">My Wishlist</Link>
                  </li>
                  <li>
                    <Link href="#">Track My Order</Link>
                  </li>
                  <li>
                    <Link href="#">Help</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="footer-copyright">
            Copyright © 2019 Molla Store. All Rights Reserved.
          </p>
          <figure className="footer-payments">
            <img
              src="assets/images/payments.png"
              alt="Payment methods"
              width="272"
              height="20"
            />
          </figure>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
