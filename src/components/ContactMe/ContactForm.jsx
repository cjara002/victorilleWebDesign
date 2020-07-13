import React from "react";
import "./ContactStyle.css";
// import {Form, FormGroup, Label, Button} from "reactstrap"

class ContactForm extends React.Component {
  state = {};

  render() {
    return (
      <React.Fragment>
       <div style={{backgroundImage: `url(https://bit.ly/2ZqdHy5)`,
                    backgroundPosition: "center",
                    // backgroundRepeat: "no-repeat"
                    }}
                    id="formBorder"
                    >
            <div className="row block-center mt-4 ">
               <div className="col">
                   <div className="container" id="formContainer">
                       <h1 className="formHeader"> Contact Me</h1>
                        <form name="contact" method="POST" data-netlify="true">
                          <p>
                            <label className="formName">
                              Your Full Name: <input type="text" name="name" />
                            </label>
                          </p>
                          <p>
                            <label className="formEmail">
                              Your Email: <input type="email" name="email" />
                            </label>
                          </p>
                          {/* <p>
                            <label>
                              Your Role:{" "}
                              <select name="role[]" multiple>
                                <option value="leader">Leader</option>
                                <option value="follower">Follower</option>
                              </select>
                            </label>
                          </p> */}
                          <p>
                            <label className="formMessage">
                              Message: <textarea name="message" defaultValue={""} />
                            </label>
                          </p>
                          <p>
                            <button type="submit">Send</button>
                          </p>
                        </form>
                   </div>
               </div>
            </div>
       </div>
      </React.Fragment>
    );
  }
}

export default ContactForm;
