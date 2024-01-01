import React from "react";
import "./ContactStyle.css";
import { Button } from "reactstrap";
import InputMask from 'react-input-mask';

class ContactForm extends React.Component {
  state = {
    form: {
      name: " ",
      // lastName: " ",
      website: " ",
      email: " ",
      phone: " ",
      message: "",
      freeGift: ""},
    errors: {
      name: " ",
      email: " ",
      phone: " ",
      message: "",
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.validateForm())
    {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeURI({ "form-name": "contact", ...this.state.form }),
      })
        .then(() => alert("Success!"))
        .catch((error) => alert(error));
    }
    else {
      alert("Please correct the errors in the form");
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      form: {
        ...prevState.form, // Spread existing state
        [name]: value       // Update the specific field
      }
    }));
  };

  validateForm = () => {
    let isValid = true;
    let errors = {};

  // Validate name
  if (!this.state.form.name?.trim()) {
    console.log("no name")
    errors.name = 'Name cannot be empty';
    isValid = false;
  }
  // Validate email
  if (!this.state.form.email?.trim()) {
    errors.email = 'Email cannot be empty';
    isValid = false;
  } else if (!this.state.form.email.includes('@')) {
    errors.email = 'Invalid email address';
    isValid = false;
  }

// Validate phone
const phone = this.state.form.phone?.replace(/-/g, ''); 
if (!phone?.trim()) {
  errors.phone = 'Phone cannot be empty';
  isValid = false;
} else if (!/^\d{10}$/.test(phone)) {
  errors.phone = 'Phone number must be 10 digits';
  isValid = false;
}

    // Validate message
    if (!this.state.form.message?.trim()) {
      errors.message = 'Message cannot be empty';
      isValid = false;
    }

    console.log("validateForm:", this.state.form)
    this.setState({ errors });
    console.log("validateForm-erros:", this.state.errors)
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
              </div>

                    <form
                      method="POST"
                      name="contact"
                      action="/success/"
                      id="formContact"
                      data-netlify="true"
                      onSubmit={this.handleSubmit} 
                    >
                      <div className="row gtr-50">
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="col-6 col-12">
                          <label className="formName">Name*</label>
                          <input
                            // required
                            type="text"
                            className="form-control-rounded form-control"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.form.name}
                          />
                           {this.state.errors.name && <p className="error">{this.state.errors.name}</p>}
                        </div>
                      </div>

                      <div className="row gtr-50">
                        <div className="col-lg-6 col-sm-12">
                          <label className="formEmail">Email*</label>
                          <input
                            // required
                            type="email"
                            className="form-control-rounded form-control"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.form.email}
                          />
                           {this.state.errors.email && <p className="error">{this.state.errors.email}</p>}
                        </div>
                        <div className="col-lg-6 col-sm-12">
                          <label className="formNumber">Phone*</label>
                          <InputMask
                            mask="999-999-9999"
                            className="form-control-rounded form-control"
                            name="phone"
                            onChange={this.handleChange}
                            value={this.state.form.phone}
                            placeholder="123-456-7890"
                          />
                           {this.state.errors.phone && <p className="error">{this.state.errors.phone}</p>}
                        </div>
                      </div>

                      <div className="row gtr-50">
                        <div className="col-6 col-12">
                          <label className="formName">Website</label>
                          <input
                            type="text"
                            className="form-control-rounded form-control"
                            name="website"
                            onChange={this.handleChange}
                            value={this.state.form.website}
                          />
                        </div>
                      </div>

                      <div className="position-relative form-group">
                        <label className="formMessage">Message*</label>
                        <textarea
                          // required
                          name="message"
                          defaultValue={""}
                          className="form-control form-control"
                          onChange={this.handleChange}
                          value={this.state.form.message}
                        />
                         {this.state.errors.message && <p className="error">{this.state.errors.message}</p>}
                      </div>

                      <Button className="btn btn-secondary" type="submit">
                        Send Message
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactForm;
