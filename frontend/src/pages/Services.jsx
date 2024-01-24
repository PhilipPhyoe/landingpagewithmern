import Button from "../components/Button";
import {
  faBuilding,
  faBusinessTime,
  faCar,
  faCity,
  faFileSignature,
  faLocationDot,
  faMailForward,
  faMoneyCheckDollar,
  faMusic,
  faPeopleGroup,
  faScrewdriverWrench,
  faTruckFast,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "../components/Services.css";
import Card from "../components/Card";
import IconCard from "../components/IconCard";

const Services = () => {
  return (
    <div>
      <div className="service-hero-container">
        <h1 className="service-hero-title">Reliable Rental Services</h1>
        <p className="service-hero-text">
          We have experienced drivers and versatile vehicles making carefree for
          your daily transportations.
        </p>
        <Button icon={faMailForward}>Contact Now</Button>
      </div>
      <div className="services">
        <h2 className="service-title">Balancing safety and comfortability.</h2>
        <div className="cards">
          <Card
            ServiceName="Punctuality"
            titleIcon={faBusinessTime}
            ServiceDescription="Every route is on time without dealy."
            featureOne="Arrive in advance to pick up."
            featureTwo="No breakdowns at all."
            featureThree="Drive within speed limit."
          />
          <Card
            ServiceName="Affordable Prices"
            titleIcon={faMoneyCheckDollar}
            ServiceDescription="Cost-effective outsourced services."
            featureOne="No worries for maintenance."
            featureTwo="Hassle free management."
            featureThree="Less fuel charges."
          />
          <Card
            ServiceName="Riding Comfort"
            titleIcon={faMusic}
            ServiceDescription="Well-maintained vehicles for relaxation."
            featureOne="Aromatic interior."
            featureTwo="Fully leather cushioned seats."
            featureThree="Disinfect weekly."
          />
        </div>
      </div>
      <section className="about">
        <div className="message">
          <h2 className="about-title">
            Mobility solutions for small to enterprise businesses.
          </h2>
          <p className="message-text">
            Providing a wide varitey of vehicles, customers can choose suitable
            packages while they benefit from affordable charges. Furthermore,
            our customers can intensively focus on their growth whereas we take
            care of their transportation. In fact, effective management and
            strong automobiles drive our customers to desired destinations.
          </p>
          <p className="message-text-2">
            Our tough team includes drivers, supervisors, accountants, and
            marketing staff.
          </p>
        </div>
        <div className="ceo">
          <img src="/images/team.jpg" className="ceo-img" />
        </div>
      </section>
      <div className="counters">
        <IconCard icon={faCity} title="Cars rented in office" text="80" />
        <IconCard icon={faUser} title="Cars for tourists" text="40" />
        <IconCard
          icon={faScrewdriverWrench}
          title="Cars serviced monthly"
          text="30"
        />
        <IconCard icon={faTruckFast} title="Cars for 24/7" text="60" />
      </div>
    </div>
  );
};

export default Services;
