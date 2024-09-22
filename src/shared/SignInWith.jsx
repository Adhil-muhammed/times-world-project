import React from "react";
import { FaGoogle, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export const SignInWith = ({ isShow }) => {
  return (
    <div className={isShow && "my-4"}>
      <div className="d-flex align-items-center justify-content-center">
        <div className="social-icon">
          <FaGoogle />
        </div>
        <div className="social-icon">
          <FaFacebook />
        </div>
        <div className="social-icon">
          <FaLinkedin />
        </div>
        <div className="social-icon">
          <FaTwitter />
        </div>
      </div>
      {isShow && (
        <div className="text-center mt-2" style={{ fontSize: "13px" }}>
          <span className="fw-medium">Example@gmail.com</span>
          <p className="fw-medium">
            copyright © 2020 Name. All right reserved.
          </p>
        </div>
      )}
    </div>
  );
};
