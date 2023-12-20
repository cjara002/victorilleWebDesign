import React from "react";
import "./ContactStyle.css";
import { Button } from "reactstrap";
// import Github from "./Github.png";
// import LinkedIn from "./LinkedIn.png";

class ContactForm extends React.Component {
  state = {
    form: {
      firstName: " ",
      lastName: " ",
      website: " ",
      email: " ",
      phone: " ",
      message: "",
      freeGift: ""},
    errors: {
      firstName: " ",
      lastName: " ",
      email: " ",
      phone: " ",
      message: "",
    }
  };

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeURI({ "form-name": "contact", ...this.state.form }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validateForm = () => {
    let isValid = true;
    let errors = {};

  // Validate firstName
  if (!this.state.firstName.trim()) {
    errors.firstName = 'First name cannot be empty';
    isValid = false;
  }

  // Validate lastName
  if (!this.state.lastName.trim()) {
    errors.lastName = 'Last name cannot be empty';
    isValid = false;
  }
  // Validate email
  if (!this.state.email.trim()) {
    errors.email = 'Email cannot be empty';
    isValid = false;
  } else if (!this.state.email.includes('@')) {
    errors.email = 'Invalid email address';
    isValid = false;
  }

  // Validate phone
  if (!this.state.phone.trim()) {
    errors.phone = 'Phone cannot be empty';
    isValid = false;
  } else if (!/^\d+$/.test(this.state.phone)) {
    errors.phone = 'Phone number must contain only digits';
    isValid = false;
  }

    // Validate message
    if (!this.state.message.trim()) {
      errors.message = 'Message cannot be empty';
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
            backgroundPosition: "center",
          }}
          id="contactBorder"
        >
            <div className="row block-center mt-4 " id="formBorder">
              <div className="col">
                <div className="card-default card " id="formContainer">
                  <div className="card-body">
                    <h1 className="formHeader">Get Your Free Quote Today!</h1>
                    <p className="formp">
                      Ready to create an exceptional website? Contact me now for 
                      expert design and development services.
                      <br /> ¡Hablo Español!
                    </p>

                    <form
                      method="POST"
                      name="contact"
                      action="/success/"
                      id="formContact"
                      data-netlify="true"
                    >
                      <div className="row gtr-50">
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="col-6 col-12">
                          <label className="formName">Name*</label>
                          <input
                            required
                            type="text"
                            className="form-control-rounded form-control"
                            name="name"
                          />
                        </div>
                      </div>

                      <div className="row gtr-50">
                        <div className="col-lg-6 col-sm-12">
                          <label className="formEmail">Email*</label>
                          <input
                            required
                            type="email"
                            className="form-control-rounded form-control"
                            name="email"
                          />
                        </div>
                        <div className="col-lg-6 col-sm-12">
                          <label className="formNumber">Phone*</label>
                          <input
                            required
                            type="text"
                            className="form-control-rounded form-control"
                            name="phone"
                          />
                        </div>
                      </div>

                      <div className="row gtr-50">
                        <div className="col-6 col-12">
                          <label className="formName">Website</label>
                          <input
                            type="text"
                            className="form-control-rounded form-control"
                            name="website"
                          />
                        </div>
                      </div>

                      <div className="position-relative form-group">
                        <label className="formMessage">Message*</label>
                        <textarea
                          required
                          name="message"
                          defaultValue={""}
                          className="form-control form-control"
                        />
                      </div>

                      <Button className="btn btn-secondary" type="submit">
                        Send Message
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
              {/* <div className="col-6">
                <div className="row gtr-50">
                  <div className="col-6 col-12-small">
                    <label><b>Email</b></label>
                    <p>cjjara002@gmail.com</p>
                  </div>
                  <div className="col-6 col-12-small">
                    <label><b>Phone</b></label>
                    <p>(626) 539-4396 </p>
                  </div>
                </div>

                <div className="row gtr-50">
                  <div className="col-6 col-12-small">
                    <label><b>Social</b></label>
                    <ul>
                      <li className="iconSocial">
                        <a
                          href="https://github.com/cjara002"
                          data-toggle="tooltip"
                          title="GitHub"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={Github}
                            className="img-responsive"
                            alt="github"
                            id="imageSocial"
                          ></img>
                        </a>
                      </li>
                      <li className="iconSocial">
                        <a
                          href="https://linkedin.com/in/carlos-j-jara"
                          data-toggle="tooltip"
                          title="LinkedIn"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={LinkedIn}
                            className="img-responsive"
                            alt="linkedin"
                            id="imageSocial"
                          ></img>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactForm;
