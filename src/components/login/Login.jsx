import React, { useState } from "react";
import image from "../../assets/mexImage.png";
import "../login/login.css";
import { IoQrCode } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import metamask from "../../assets/metamask-icon.svg";
import { FaTelegramPlane } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import Countdown from "../Countdown-Timer/Countdown";

const Login = () => {
  const [isActive, setIsActive] = useState("email");
  const [showPassword, setShowPassword] = useState(false);
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [activeDiv, setActiveDiv] = useState(false);

  return (
    <div className="afternavdiv">
      <div className="secondimage-div">
            <div className="content">
            <img className="coin-image" src={image} alt="" />
            <p className="signupP">Sign Up to Claim</p>
            <p className="signupP" id="usdt">
              8,000 USDT Bonus
            </p>
            <div className="clock-div">
              
              <FaRegClock />
              <div>
                <p>Limited-time</p>
                <span>
                  <Countdown />
                </span>
              </div>
            </div>
          </div>
      </div>
      <div className="main-section">
        <div className="loginDiv">
          <h2>Log In</h2>
          <div className="optionDiv">
            <p
              onClick={() => setIsActive("email")}
              className={`email ${isActive === "email" ? "active" : ""}`}
            >
              {" "}
              Email{" "}
            </p>
            <p
              onClick={() => setIsActive("mobile")}
              className={`mobile ${isActive === "mobile" ? "active" : ""}`}
            >
              Mobile
            </p>
            <div className="qrCode-div">
              <IoQrCode className="qrCode" />
            </div>
          </div>

          <div className="inputDiv">
            {isActive === "email" ? (
              <div className="input-wrapper">
                <FaEnvelope className="input-icon" id="envelope-icon" />
                <input
                  type="email"
                  className="input"
                  placeholder="Email/Sub-Account"
                  value={email}
                  onChange={(e) => {
                    const emailInput = e.target.value;
                    setEmail(emailInput);
                  }}
                />
              </div>
            ) : (
              <div className="input-wrapper">
                <FaEnvelope className="input-icon" id="envelope-icon" />
                <input
                  type="tel"
                  className="input"
                  placeholder="Mobile Number"
                  value={`+${mobile}`}
                  onChange={(e) => {
                    const rawInput = e.target.value;

                    const numericInput = rawInput.replace(/\D/g, "");

                    setMobile(numericInput);
                  }}
                />
              </div>
            )}

            <div className="input-wrapper">
              <IoIosLock className="input-icon" id="password-icon" />
              <div
                className="passicon-div"
                onClick={() => setShowPassword(!showPassword)}
              >
                {" "}
                {showPassword === true ? (
                  <AiFillEye className="input-icon" id="eye-icon" />
                ) : (
                  <AiFillEyeInvisible className="input-icon" id="eye-icon" />
                )}
              </div>

              <input
                type={showPassword ? "text" : "password"}
                className="input"
                placeholder="Password"
              />
            </div>

            <div className="toggle-container">
              <div
                className={`toggle-div ${activeDiv === true ? "active" : ""}`}
                onClick={() => setActiveDiv(!activeDiv)}
              >
                <button
                  className={`toggle-button ${
                    activeDiv === true ? "active" : ""
                  }`}
                ></button>
              </div>
              <p>Stay logged in on this device for 5 days</p>
            </div>

            <button className="button">Log In</button>
            <p className="forgotP">Forgot Password?</p>
            <div className="orDiv">
              <div className="lineDiv"></div>
              <p>or log in with</p>
              <div className="lineDiv"></div>
            </div>
          </div>

          <div className="social-div">
            <div>
              <FcGoogle className="social-icon" />
            </div>
            <div>
              <FaApple className="social-icon" />
            </div>
            <div>
              <img className="metamask" src={metamask} alt="" />
            </div>
            <div>
              <FaTelegramPlane className="social-icon" id="telegram" />
            </div>
          </div>
        </div>
        <div className="imageDiv">
          <div className="content">
            <img className="coin-image" src="https://static.mocortech.com/www/static/images/login/reward3-img-dark.png?v=1" alt="" />
            <p className="signupP">Sign Up to Claim</p>
            <p className="signupP" id="usdt">
              8,000 USDT Bonus
            </p>
            <div className="clock-div">
              
              <FaRegClock />
              <div>
                <p>Limited-time</p>
                <span>
                  <Countdown />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
