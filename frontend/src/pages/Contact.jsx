import "../components/Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact-hero-container">
        <h1 className="contact-hero-title">We are happy to support you.</h1>
        <p className="contact-hero-text">
          Office Rental - Business Travel - Outsourcing
        </p>
      </div>
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <div className="contact-address">
          <p className="one">
            In addition to the contact below, you can send a message to us using
            our message form.
          </p>
          <p className="two">Hector Myanmar</p>
          <p>
            No.920/921, Bayint Naung road, 43 ward, North Dagon Township,
            Yangon., Yangon, Myanmar
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
