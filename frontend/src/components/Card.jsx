import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../components/Card.css";
const Card = ({
  ServiceName,
  titleIcon,
  ServiceDescription,
  featureOne,
  featureTwo,
  featureThree,
}) => {
  return (
    <div className="card">
      <div className="title">
        <FontAwesomeIcon icon={titleIcon} className="main-icon" />
        <h2 className="card-title">{ServiceName}</h2>
      </div>

      <p className="description">{ServiceDescription}</p>
      <hr />
      <h5>Features</h5>
      <ul>
        <li className="feature">
          <FontAwesomeIcon icon={faCircleCheck} className="feature-icon" />
          <p>{featureOne}</p>
        </li>
        <li className="feature">
          <FontAwesomeIcon icon={faCircleCheck} className="feature-icon" />
          <p>{featureTwo}</p>
        </li>
        <li className="feature">
          <FontAwesomeIcon icon={faCircleCheck} className="feature-icon" />
          <p>{featureThree}</p>
        </li>
      </ul>
    </div>
  );
};

export default Card;
