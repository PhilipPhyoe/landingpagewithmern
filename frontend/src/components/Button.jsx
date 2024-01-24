import "../components/Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Button = ({ children, icon }) => {
  return (
    <div>
      <Link to="/contact">
        <button className="btn">
          <FontAwesomeIcon icon={icon} />
          {children}
        </button>
      </Link>
    </div>
  );
};

export default Button;
