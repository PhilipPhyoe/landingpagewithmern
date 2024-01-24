import Button from "../components/Button";
import {
  faMailForward,
  faMusic,
  faStreetView,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import "../components/About.css";
import Card from "../components/Card";

const About = () => {
  return (
    <div>
      <div className="about-hero-container">
        <h1 className="about-hero-title">Helping firms move forward</h1>
        <p className="about-hero-text">
          We ensure pleasant and comfortable daily routines.
        </p>
        <Button icon={faMailForward}>Contact Now</Button>
      </div>
      <div className="services">
        <h2 className="service-title">
          Creating job opportunities for our citizens.
        </h2>
        <div className="cards">
          <Card
            ServiceName="Leadership"
            titleIcon={faStreetView}
            ServiceDescription="Hire and train talents."
            featureOne="Prioritize local drivers."
            featureTwo="Salary plus benefits."
            featureThree="Continuous training."
          />
          <Card
            ServiceName="Corporate Governance"
            titleIcon={faThumbsUp}
            ServiceDescription="Transparency and honesty."
            featureOne="Follow rules."
            featureTwo="No frauds."
            featureThree="Proper management."
          />
          <Card
            ServiceName="Sustainable Growth"
            titleIcon={faMusic}
            ServiceDescription="All stakeholders must win."
            featureOne="Quality services."
            featureTwo="Affordable fess."
            featureThree="Carefree insurance."
          />
        </div>
      </div>
      <section className="about-about">
        <h2 className="about-title">Success is helping others successful.</h2>
        <p className="about-message-text">
          The personality of our business is to implement the triangle benefits.
          In fact, we emphasize local drivers, business growth, and the
          community. Establishing rental services to prominent corporations in
          Myanmar, we open more opportunities for common people. Next, we move
          forward our services to logistics.
        </p>
        <p className="about-message-text-2">
          Our slogan is to make Myanmar great together.
        </p>
      </section>
    </div>
  );
};

export default About;
