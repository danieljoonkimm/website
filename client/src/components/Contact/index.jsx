import React, { Component } from "react";

import "./contact.scss";

import { Icon } from "react-icons-kit";
import { location } from "react-icons-kit/icomoon/location";
import { phone } from "react-icons-kit/icomoon/phone";
import { ic_mail_outline } from "react-icons-kit/md/ic_mail_outline";
import pin from '../../../public/images/pin.png';


import GoogleMapReact from "google-map-react";
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "#1a1e23",
      padding: "7px 28px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -25%)"
    }}
  >
    {text}
  </div>
);

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      center: { lat: 34.052235, lng: -118.243683 },
      zoom: 11
    };
  }

  sendMessage() {
    alert('Message has been successfully sent!');
    document.getElementById("textArea").value = "";
  }

  render() {
    return (
      <div id="contact" className="contact-container">
        <div className="background-headers">
          <div className="contact-smaller-header" data-aos="fade-up">
            <h3>Feel free to email me!</h3>
          </div>
          <div className="contact-header" data-aos="fade-up">
            <h1>GET IN CONTACT</h1>
          </div>
        </div>

        <div className="information">
          <div className="contact-info" data-aos="fade-up">
            <Icon size={40} icon={phone} className="icon" />
            <div className="phoneNumber">(323) 603-7431</div>
          </div>

          <div className="contact-info" data-aos="fade-up">
            <Icon size={40} icon={ic_mail_outline} className="icon" />
            <div className="email">danieljoonkimm@gmail.com</div>
          </div>

          <div className="contact-info" data-aos="fade-up">
            <Icon size={40} icon={location} className="icon" />
            <div className="from">Los Angeles, CA</div>
          </div>
        </div>

        <div className="modal_container">
          <button
            type="button"
            className="btn btn-info btn-lg"
            data-toggle="modal"
            data-target="#myModal"
          >
            Write Email
          </button>

          <div
            className="modal fade"
            id="myModal"
            role="dialog"
            backdrop="false"
          >
            <div className="vertical-alignment-helper">
              <div className="modal-dialog vertical-align-center">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                    <h4 className="modal-title">Send Email to Daniel</h4>
                  </div>
                  <div className="modal-body">
                    <textarea id="textArea"
                      rows="4"
                      cols="50"
                      placeholder="write your message.."
                    />
                  </div>
                  <div className="modal-footer">
                    <button onClick={this.sendMessage.bind(this)}
                      type="button"
                      className="btn btn-default"
                      data-dismiss="modal"
                    >
                      Send
                    </button>
                    <button
                      type="button"
                      className="btn btn-default"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <GoogleMapReact
            bootstrapURLKeys={{ key: REACT_APP_API_KEY }}
            center={this.state.center}
            defaultZoom={this.state.zoom}
            style={{ height: "300px" }}
          >
            <AnyReactComponent
              lat={34.0407}
              lng={-118.2468}
              text={"My Location"}

            />
          </GoogleMapReact>
        </div>

        <div className="footerWrapper">
          <div className="footerContainer">Daniel Kim © 2018</div>
        </div>
      </div>
    );
  }
}

export default Contact;
