import React from "react";
import "./ContactStyle.css";
import { Button } from "reactstrap";
import Github from "./Github.png";
import LinkedIn from "./LinkedIn.png";
import Fade from "react-reveal/Fade";

class ContactForm extends React.Component {
  state = {
    firstName: " ",
    lastName: " ",
    email: " ",
    phone: " ",
    message: " ",
  };

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeURI({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
          <h1 className="formHeader"> Contact Me</h1>

          <Fade bottom>
            <div className="row block-center mt-4 " id="formBorder">
              <div className="col-6">
                <div className="card-default card " id="formContainer">
                  <div className="card-body">
                    <form
                      method="POST"
                      name="contact"
                      action="/contact"
                      id="formContact"
                    >
                      <div className="row gtr-50">
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="col-6 col-12">
                          <label className="formName"> Name</label>
                          <input
                            required
                            type="text"
                            className="form-control-rounded form-control"
                            name="name"
                          />
                        </div>
                        {/* <div className="col-6 col-12-small">
                          <label className="formLastName">Last Name</label>
                          <input
                            required
                            type="text"
                            className="form-control-rounded form-control"
                            name="lastName"
                          />
                        </div> */}
                      </div>

                      <div className="row gtr-50">
                        <div className="col-6 col-12-small">
                          <label className="formEmail">Email</label>
                          <input
                            required
                            type="email"
                            className="form-control-rounded form-control"
                            name="email"
                          />
                        </div>
                        <div className="col-6 col-12-small">
                          <label className="formNumber">Phone Number</label>
                          <input
                            required
                            type="text"
                            className="form-control-rounded form-control"
                            name="phone"
                          />
                        </div>
                      </div>

                      <div className="position-relative form-group">
                        <label className="formMessage">Message</label>
                        <textarea
                          required
                          name="message"
                          defaultValue={""}
                          className="form-control form-control"
                        />
                      </div>

                      <Button className="btn btn-secondary" type="submit">
                        Submit Contact
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-6">
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
              </div>
            </div>
          </Fade>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactForm;
