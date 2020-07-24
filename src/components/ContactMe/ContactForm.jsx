import React from "react";
import "./ContactStyle.css";
// import {Form, FormGroup, Label, Button} from "reactstrap"
import Github from "./Github.png";
import LinkedIn from "./LinkedIn.png";

class ContactForm extends React.Component {
  state = {
    name: " ",
    email: " ",
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
    const { name, email, message } = this.state;
    return (
      <React.Fragment>
        <div
          style={{
            backgroundImage: `url(https://bit.ly/2ZqdHy5)`,
            backgroundPosition: "center",
            // backgroundRepeat: "no-repeat"
          }}
          id="formBorder"
        >
          <div className="row block-center mt-4 ">
            <div className="col-6">
              <div className="container" id="formContainer">
                <h1 className="formHeader"> Contact Me</h1>
                {/* <form name="contact" method="POST" data-netlify="true"> */}
                <form
                  action="POST"
                  data-netlify="true"
                  onSubmit={this.handleSubmit}
                  name="contact"
                >
                  <div>
                    <label className="formName">
                      Your Full Name:{" "}
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>
                  <div>
                    <label className="formEmail">
                      Your Email:{" "}
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>
                  {/* <p>
                            <label>
                              Your Role:{" "}
                              <select name="role[]" multiple>
                                <option value="leader">Leader</option>
                                <option value="follower">Follower</option>
                              </select>
                            </label>
                          </p> */}
                  <div>
                    <label className="formMessage">
                      Message:{" "}
                      <textarea
                        name="message"
                        defaultValue={""}
                        value={message}
                        onChange={this.handleChange}
                      />
                    </label>
                  </div>

                  <div>
                   <div dtat-netlify-recaptcha="true">
                   </div>
                  </div>
                  <div>
                    <button type="submit">Send</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-6">
              <ul>
                <li>
                  <a href="https://github.com/cjara002">
                    <img
                      src={Github}
                      className="img-responsive"
                      alt="github"
                    ></img>
                  </a>
                </li>
                <li>
                  <a href="www.linkedin.com/in/carlos-j-jara">
                    <img
                      src={LinkedIn}
                      className="img-responsive"
                      alt="linkedin"
                    ></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactForm;
