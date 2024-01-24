import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Form from "./Form";
const Footer = () => {
  return (
    <div className="footer">
      <div className="address">
        <h3>Our Office</h3>
        <p>No.920/921, Bayint Naung road, 43 ward,</p>
        <p>North Dagon Township, Yangon., Yangon, Myanmar</p>
        <Link to="https://www.facebook.com/profile.php?id=100063921074901">
          <FontAwesomeIcon icon={faFacebookF} className="footer-social-icon" />
        </Link>
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default Footer;
