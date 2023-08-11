import React from "react";
import "../../styles/landing.css";
import Back from "../../../public/assets/landing.png";
import mark from "../../../public/assets/b-mark.png";
import markText from "../../../public/assets/baccabit-text.png";
import formText from "../../../public/assets/landing-text.png";
import sign1Back from "../../../public/assets/sign1-back.png";
// import sign2Back from "../../../public/assets/sign2-back.png";
import gmail from "../../../public/assets/gmail.png";
import metamask from "../../../public/assets/metamaskicon.png";
import gmailText from "../../../public/assets/sign-gmail.png";
import metamaskText from "../../../public/assets/sign-metamask.png";

function Landing() {
  return (
    <div className="landing-container">
      <div className="landing-wrapper">
        <img className="landing-back" src={Back} />
        <div className="landing-form">
          <div className="landing-mark">
            <img className="mark-img" src={mark} />
            <img className="mark-text" src={markText} />
          </div>
          <img className="form-text" src={formText} />
          <div
            className="sign-metamask"
          >
            <img className="sign1-back" src={sign1Back} />
            <img className="metamask" src={metamask} />
            <img className="metamask-text" src={metamaskText} />
          </div>
          <div
            className="sign-gmail"
          >
            <img className="sign2-back" src={sign1Back} />
            <img className="gmail" src={gmail} />
            <img className="gmail-text" src={gmailText} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
