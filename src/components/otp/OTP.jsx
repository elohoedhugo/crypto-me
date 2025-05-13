import React from "react";
import "../otp/otp.css";
import { useState } from "react";
import "../login/login.css";
import { IoQrCode } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import metamask from "../../assets/metamask-icon.svg";
import { FaTelegramPlane } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import Countdown from "../countdown-Timer/Countdown";
import { useNavigate } from "react-router-dom";

const OTP = () => {
  const [isotp, setIsotp] = useState(true);
  const [number, setNumber] = useState("");
  const [loginAttempted, setLoginAttempted] = useState(false);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleOTPSubmit = () => {
    if (!number) {
      setError("Field cannot be empty");
      return
    }

    if (!loginAttempted) {
      setError("Incorrect OTP. Please, try again");
      setLoginAttempted(true);
      return
    }

    setLoader(true);
    setTimeout(() => {
      setError("")
      setLoader(false);
      navigate("/")
    }, 3000);
  };

  return (
    <div className="afternavdiv">
      <div className="secondimage-div">
        <div className="content">
          <img
            className="coin-image"
            src="https://static.mocortech.com/www/static/images/login/reward3-img-dark.png?v=1"
            alt=""
          />
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
          <h2>Enter OTP</h2>
          <div className="optionDiv">
            <p
              onClick={() => setIsotp(true)}
              className={`number ${isotp === true ? "active" : ""}`}
            >
              OTP
            </p>

            <div className="qrCode-div">
              <IoQrCode className="qrCode" />
            </div>
          </div>

          <div className="inputDiv">

            {error && <p className="error"> {error}</p>}
            {isotp === true ? (
              <div className="input-wrapper">
                <FaEnvelope className="input-icon" id="envelope-icon" />
                <input
                  type="text"
                  pattern='"\d'
                  inputMode="numeric"
                  className="input"
                  placeholder="XXXX-XXXX"
                  value={number}
                  onChange={(e) => {
                    const numberInput = e.target.value.replace(/\D/g, "");
                    setNumber(numberInput);
                  }}
                />
              </div>
            ) : (
              ""
            )}

            <button className="button" onClick={handleOTPSubmit}>{loader ? "Verifying...." : "Proceed"}</button>
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
            <img
              className="coin-image"
              src="https://static.mocortech.com/www/static/images/login/reward3-img-dark.png?v=1"
              alt=""
            />
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

export default OTP;
