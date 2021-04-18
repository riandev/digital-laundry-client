import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import FooterCol from "../FooterCol/FooterCol";
import logo from "../../../images/logo.png";

const Footer = () => {
  const noNamed = [
    { name: "Emergency Dental Care", link: "/emergency" },
    { name: "Check Up", link: "/checkup" },
    { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
    { name: "Tooth Extraction", link: "/tooth-extract" },
    { name: "Check Up", link: "/checkup" },
  ];
  const ourAddress = [
    { name: "Dhaka, Bangladesh", link: "//google.com/map" },
    { name: "Yards", link: "//google.com/map" },
  ];
  const blogFeed = [
    { name: "Dry Clean Your Winter Coat", link: "/emergency" },
    { name: "M3 E36 Cabrio", link: "/checkup" },
    { name: "Ordering a rinse is easy!", link: "/personal-treatment" },
    { name: "Don’t wait for cleaning until it’s too late!", link: "/tooth-extract" },
    { name: "Wash & Fold", link: "/checkup" },
  ];
  const services = [
    { name: "Dry Clean Your Winter Coat", link: "/emergency" },
    { name: "Dry Clean", link: "/checkup" },
    { name: "Ironing Services", link: "/personal-treatment" },
    { name: "Laundry", link: "/tooth-extract" },
    { name: "Wash & Fold", link: "/checkup" },
    { name: "Laundry Service London", link: "/checkup" },
    { name: "Laundry App", link: "/checkup" },
  ];
  return (
    <footer className="footer-area clear-both">
      <div className="container pt-5">
        <div className="row py-5">
          <FooterCol key={1} menuTitle={''} menuItems={noNamed} />
          <FooterCol key={2} menuTitle="Services" menuItems={services} />
          <FooterCol key={3} menuTitle="Blog Feed" menuItems={blogFeed} />
          <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
            <ul className="social-media list-inline">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <h6>Call now</h6>
              <button className="btn btn-primary">+8801632321051</button>
            </div>
          </FooterCol>
        </div>
        <div className="copyRight text-center">
          <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
