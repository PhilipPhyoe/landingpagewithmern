import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./IconCard.css";
const IconCard = ({ icon, title, text }) => {
  return (
    <div className="icon-card">
      <FontAwesomeIcon icon={icon} className="icon" />
      <p className="icon-text">{text}</p>
      <h5 className="icon-title">{title}</h5>
    </div>
  );
};

export default IconCard;
