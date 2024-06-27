import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import emailjs from "@emailjs/browser";

import "../styles/callToAction.css";

function CallToAction() {
  const [errors, setErrors] = useState({});
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    console.log(userInfo)
  })

  const sendEmail = () => {
    var templateParams = {
      name: userInfo.name,
      email: userInfo.email,
      subject: userInfo.subject,
      message: userInfo.message,
    };

    emailjs
      .send(
        "service_bk8ljie",
        "template_gu740jm",
        templateParams,
        "PByxhVdkuDB9scoXI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({ ...prevState, [name]: value }));
  }

  function isValidEmail(email) {
    // Define a regular expression pattern for email validation.
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let validationErrors = {};

    if (userInfo.email.length === 0 || !isValidEmail(userInfo.email)) {
      validationErrors.email = 'Email is invalid.'
    }

    if (userInfo.name.length === 0){
      validationErrors.name = 'Please enter a name.'
    }

    if (userInfo.subject.length === 0) {
      validationErrors.subject = 'Please enter a subject.'
    }

    if (userInfo.message.length === 0) {
      validationErrors.message = 'Please enter a message.'
    }

    
    if (Object.keys(validationErrors).length > 0) {
      console.log(validationErrors)
      console.log("Ammount of Errors:", Object.keys(validationErrors).length)
      setErrors(validationErrors);
      console.log(errors)
    } else {
      // Handle the successful form submission, e.g., sending formData to a server
      try {
       await sendEmail();
       console.log("uerInfo:", userInfo)
       handleShow();
       setUserInfo({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      } catch(error) {
        console.log("🚀 ~ handleSubmit ~ error:", error.message)
        
      }
      console.log('Data sent.')
      setErrors({}); // Clear any previous errors
    }
  }
  return (
    <div className="cardContainer">
      <div class="card">
        <div class="textBox">
          <div class="textContent">
            <p class="h1">Contact us now for a free estimate</p>
          </div>
          <p class="p">Let us solve your problems!</p>
          <button class="button" onClick={handleShow}>
            Get a Free Estimate
            <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
              <path
                clip-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tell us how we can help</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group mb-4">
              <label>Your Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="John Doe"
                value={userInfo.name}
                onChange={handleChange}
              />
              {errors.name && <div className="text-danger">{errors.name}</div>}
            </div>

            <div className="form-group mb-4">
              <label>Your Email Address</label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="name@example.com"
                value={userInfo.email}
                onChange={handleChange}
              />
              {errors.email && (
                <div className="text-danger">{errors.email}</div>
              )}
            </div>

            <div className="form-group mb-4">
              <label>Subject</label>
              <input
                name="subject"
                type="text"
                className="form-control"
                placeholder="Contact Subject"
                value={userInfo.subject}
                onChange={handleChange}
              />
              {errors.subject && (
                <div className="text-danger">{errors.subject}</div>
              )}
            </div>

            <div className="form-group mb-4">
              <label>Your Message</label>
              <textarea
                name="message"
                className="form-control"
                rows="3"
                maxLength="1000"
                value={userInfo.message}
                onChange={handleChange}
              ></textarea>
              <p>{userInfo.message.length}/1000</p>
              {errors.message && (
                <div className="text-danger">{errors.message}</div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg"
              onClick={handleSubmit}
            >
              Submit Form
            </button>
          </form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}

export default CallToAction;
