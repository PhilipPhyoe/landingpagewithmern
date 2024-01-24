import { useState } from "react";
import "../components/Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]{2,5}/;
  const phonePattern = /^[0-9]{6,12}/;
  const [finalMessage, setFinalMessage] = useState("");
  const [sendMessage, setSendMessage] = useState("");

  const validateForm = async (e) => {
    e.preventDefault();

    if (name === "" || email === "" || phone === "") {
      setSendMessage("");
      if (name === "") {
        setNameError("Name is required.");
      }
      if (email === "") {
        setEmailError("Email is required.");
      } else if (!emailPattern.test(email)) {
        setEmailError("Email address is invalid.");
      }
      if (phone === "") {
        setPhoneError("Email is required.");
      } else if (!phonePattern.test(phone)) {
        setPhoneError("Phone number is invalid.");
      }
      setFinalMessage("All fields are required!");
    } else {
      console.log(`${name} + ${email} + ${phone}`);
      setFinalMessage("");
      var url = "http://localhost/ContactFormControls/formSubmit.php";

      var Data = {
        name: name,
        email: email,
        phone: phone,
      };
      try {
        await fetch(url, {
          method: "POST",
          body: JSON.stringify(Data),
        }).then(setSendMessage("Data is sent successfully."));
      } catch (error) {
        console.log(error);
      }
    }

    //setErrors(Validate(values, errors));

    /*
      axios.post("http://localhost:5000/api/visitors", {
        name: values.name,
        email: values.email,
        phone: values.phone,
      });
      
      var url = "http://localhost/ContactFormControls/formSubmit.php";
      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      var Data = {
        name: values.name,
        email: values.email,
        phone: values.phone,
      };
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      }).then(successMessage());

      return;
    }*/
  };

  return (
    <div className="form-container">
      <h3 className="form-title">Book Now</h3>
      <form>
        <label htmlFor="name" className="label-text">
          Your Name
        </label>
        <input
          className="input"
          type="text"
          name="name"
          style={nameError ? { borderColor: "red" } : {}}
          onChange={(e) => {
            setName(e.target.value);
            setNameError("");
          }}
        />
        {nameError && <p style={{ color: "red" }}>{nameError}</p>}

        <label htmlFor="email" className="label-text">
          Your Email
        </label>
        <input
          className="input"
          type="email"
          name="email"
          style={emailError ? { borderColor: "red" } : {}}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError("");
          }}
        />
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        <label htmlFor="phone" className="label-text">
          Your Phone Number
        </label>
        <input
          className="input"
          type="text"
          name="phone"
          style={phoneError ? { borderColor: "red" } : {}}
          onChange={(e) => {
            setPhone(e.target.value);
            setPhoneError("");
          }}
        />
        {phoneError && <p style={{ color: "red" }}>{phoneError}</p>}
        <button
          className="form-btn"
          type="submit"
          name="submit"
          onClick={validateForm}
        >
          Submit
        </button>
        {finalMessage != "" ? (
          <span style={{ color: "red" }}>{finalMessage}</span>
        ) : (
          <></>
        )}
        {sendMessage != "" ? <span>{sendMessage}</span> : <></>}
      </form>
    </div>
  );
};

export default Form;
