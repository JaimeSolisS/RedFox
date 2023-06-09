import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  ContactContainer,
  ContactH1,
  StyledContactForm,
  ContactWrapper,
  Column1,
  Column2,
  ContactRow,
  InformationContainer,
  ContactH2,
  DataLine,
  DataText,
  ContactIcon,
} from "./ContactElements";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Contact = ({ imgStart }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const emailRegex = /^\S+@\S+\.\S+$/; // regular expression to validate email format
    const userEmail = e.target.user_email.value; // get email input value from form

    if (!emailRegex.test(userEmail)) {
      // check if email is valid
      alert("Please enter a valid email address.");
      return; // exit function if email is not valid
    }

    emailjs
      .sendForm(
        "service_xq6r8gt",
        "template_gy9pw2w",
        form.current,
        "tORQnzUQM1PxoNA_D"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          e.target.reset();
        }
      );
  };

  return (
    <ContactContainer id="contact">
      <ContactH1>Contact Us</ContactH1>
      <ContactWrapper>
        <ContactRow imgStart={imgStart}>
          <Column1>
            <InformationContainer>
              <ContactH2>Contact Information</ContactH2>
              <DataLine>
                <ContactIcon icon={faPhone} />
                <DataText>915-300-3571</DataText>
              </DataLine>
              <DataLine>
                <ContactIcon icon={faEnvelope} />
                <DataText>admin@rfintlogistics.com</DataText>
              </DataLine>
              <DataLine>
                <ContactIcon icon={faMapMarkerAlt} />
                <DataText>
                  1525 Wyoming Ave <br /> El Paso, TX 79902
                </DataText>
              </DataLine>
            </InformationContainer>
          </Column1>
          <Column2>
            <StyledContactForm>
              <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email*</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send Message" icon={faPaperPlane} />
              </form>
            </StyledContactForm>
          </Column2>
        </ContactRow>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
