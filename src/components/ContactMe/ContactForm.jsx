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
                  
                  <ul>
                  <li className="iconSocial">
                    <a href="https://github.com/cjara002" data-toggle="tooltip" title="GitHub">
                      <img
                        src={Github}
                        className="img-responsive"
                        alt="github"
                        id="imageSocial"
                      ></img>
                    </a>
                  </li>
                  <li className="iconSocial">
                    <a href="www.linkedin.com/in/carlos-j-jara" data-toggle="tooltip" title="LinkedIn">
                      <img
                        src={LinkedIn}
                        className="img-responsive"
                        alt="linkedin"
                        id="imageSocial"
                      ></img>
                    </a>
                  </li>
                </ul>

            <div className="row block-center mt-4 " id="formBorder">
              <div className="col">
                <div className="container" id="formContainer">
                  <form
                    method="POST"
                    name="contact"
                    action="/contact"
                    id="formContact"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <div>
                      <label className="formName">
                        Your Full Name:{" "}
                        <input
                          required
                          type="text"
                          name="name"
                        />
                      </label>
                    </div>
  
                    <div>
                      <label className="formEmail">
                        Your Email:{" "}
                        <input
                          required
                          type="email"
                          name="email"
                        />
                      </label>
                    </div>
                    <div>
                      <label className="formMessage">
                        Message:{" "}
                        <textarea
                          required
                          name="message"
                          defaultValue={""}
                        />
                      </label>
                    </div>
  
                    <div>
                      <div data-netlify-recaptcha="true"></div>
                    </div>
                    <div>
                      <button type="submit">Send</button>
                    </div>
                  </form>
                </div>
              </div>
  
        
            </div>
          </div>


        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default ContactForm;
