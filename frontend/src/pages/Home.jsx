import Button from "../components/Button";
import {
  faBuilding,
  faCar,
  faFileSignature,
  faIdCard,
  faLocationDot,
  faMailForward,
  faPeopleGroup,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import "../components/Home.css";
import Card from "../components/Card";
import IconCard from "../components/IconCard";

const Home = () => {
  return (
    <div>
      <div className="home-hero-container">
        <h1 className="home-hero-title">Go better with Hector Myanmar</h1>
        <p className="home-hero-text">
          A rental company which prioritizes safety, security and
          comfortability.
        </p>
        <Button icon={faMailForward}>Contact Now</Button>
      </div>
      <div className="services">
        <h2 className="service-title">
          Your whole mobile department. One rental company.
        </h2>
        <div className="cards">
          <Card
            ServiceName="Office Rental"
            titleIcon={faBuilding}
            ServiceDescription="Office Rental service to help your staff get ease and comfort during rush hours."
            featureOne="24/7 Security on roads."
            featureTwo="Carefree for maintenance."
            featureThree="Fully insured for accidents."
          />
          <Card
            ServiceName="Business Travel"
            titleIcon={faPlane}
            ServiceDescription="Carefree travel to destinations focusing on safety of passengers."
            featureOne="Follow rules and regulations"
            featureTwo="Towing and repairing services."
            featureThree="Cost effective routes."
          />
          <Card
            ServiceName="Outsourcing"
            titleIcon={faIdCard}
            ServiceDescription="Reliable mobility department for your daily usage."
            featureOne="Deligent and polite drivers."
            featureTwo="Fully responsible for maintenance."
            featureThree="No extra or hidden costs."
          />
        </div>
      </div>
      <section className="about">
        <div className="message">
          <p className="quote">Move forward as fast as possilbe.</p>
          <hr className="one-line" />
          <h3 className="name">Paing Oo Htet</h3>
          <h5 className="role">CEO & Founder</h5>
          <p className="message-text">
            Born in Yangon and founded Hector Myanmar Group in 2017. Although
            the company had one vehicle at the birth, it has grown to a
            corporate car rental company within months. He is a car enthusiast
            and love to fix, repair, diagnose and upgrade motor vehicles. Due to
            his leadership, the group extends its business revenues and hires
            more than 100 employees.
          </p>
          <p className="message-text-2">
            He named his company as Hector Myanmar to honor his father U Thein
            Zaw @ Hector.
          </p>
        </div>
        <div className="ceo">
          <img src="/images/ricky.jpg" className="ceo-img" />
        </div>
      </section>
      <div className="counters">
        <IconCard icon={faCar} title="Vehicles in the Fleet" text="120" />
        <IconCard icon={faFileSignature} title="Annual Contracts" text="15" />
        <IconCard icon={faPeopleGroup} title="Total Employees" text="143" />
        <IconCard
          icon={faLocationDot}
          title="Monthly Kilometers"
          text="300000"
        />
      </div>
    </div>
  );
};

export default Home;
