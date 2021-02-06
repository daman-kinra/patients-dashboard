import React from "react";
import Avatar from "../Static/dummy_photo.png";

function RightMain() {
  return (
    <div className="patients_info">
      <div className="patients_content heading rightpart">
        <h4>Patient Information</h4>
      </div>
      <div className="data">
        <div className="user_img">
          <img src={Avatar} alt="" />
        </div>
        <div className="details">
          <div className="user_name">
            <h2>Sara Smith</h2>
          </div>
          <div className="info">
            <div className="data1">
              <div className="keys">
                <p>Phone:</p>
                <p>Email:</p>
                <p>Gender:</p>
                <p>Age:</p>
              </div>
              <div className="values">
                <p>
                  <strong>302-857-9685</strong>
                </p>
                <p>
                  <strong>sarasmith@gmail.com</strong>
                </p>
                <p>
                  <strong>Female</strong>
                </p>
                <p>
                  <strong>45</strong>
                </p>
              </div>
            </div>
            <div className="data2">
              <div className="keys">
                <p>Surgery Type:</p>
                <p>Surgery Date:</p>
                <p>Height(cm):</p>
                <p>Weight(lb):</p>
                <p>BMI:</p>
              </div>
              <div className="values">
                <p>
                  <strong>Rotator Cuff Repair</strong>
                </p>
                <p>
                  <strong>15 Aug 2020</strong>
                </p>
                <p>
                  <strong>163</strong>
                </p>
                <p>
                  <strong>110</strong>
                </p>
                <p>
                  <strong>19</strong>
                </p>
              </div>
            </div>
            <div className="data3">
              <div className="keys">
                <p>Phone:</p>
                <p>Email:</p>
                <p>Gender:</p>
                <p>Age:</p>
              </div>
              <div className="values">
                <p>
                  <strong>302-857-9685</strong>
                </p>
                <p>
                  <strong>sarasmith@gmail.com</strong>
                </p>
                <p>
                  <strong>Female</strong>
                </p>
                <p>
                  <strong>45</strong>
                </p>
              </div>
            </div>
            <div className="data4">
              <p>Surgery Clearence</p>
              <div className="yes">
                <p>YES</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightMain;
