import React from "react";
import {
  BsSearch,
  BsLinkedin,
  BsYoutube,
  BsInstagram,
  BsGithub,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-date d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="mb-4">Contact Us</h4>
              <div>
                <address className="fs-6 text-white">
                  UlaanBaatar Mongolia ,<br /> Khan-Uul <br />
                  PinCode: 131103
                </address>
                <a href="#" className="mt-4 d-block mb-3 f-links">
                  +976 88559505
                </a>
                <a href="#" className="mt-4 d-block mb-3 f-links">
                  GanzorigEnkhtsogt@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30">
                  <a href="#" className="text-white">
                    <BsLinkedin />
                  </a>
                  <a href="#" className="text-white">
                    <BsInstagram />
                  </a>
                  <a href="#" className="text-white">
                    <BsGithub />
                  </a>
                  <a href="#" className="text-white">
                    <BsYoutube />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="f-links py-2 mb-1">Privacy Policy</Link>
                <Link className="f-links py-2 mb-1">Refund Policy</Link>
                <Link className="f-links py-2 mb-1">Shipping Policy</Link>
                <Link className="f-links py-2 mb-1">Terms & Conditions</Link>
                <Link className="f-links py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="f-links py-2 mb-1">About Us</Link>
                <Link className="f-links py-2 mb-1">FAQ</Link>
                <Link className="f-links py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="f-links py-2 mb-1">Laptops</Link>
                <Link className="f-links py-2 mb-1">Headphones</Link>
                <Link className="f-links py-2 mb-1">Tablet</Link>
                <Link className="f-links py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center">
                &copy;{new Date().getFullYear()}:Power by Developer's Corner{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
