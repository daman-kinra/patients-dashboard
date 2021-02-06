import React from "react";

function LowerPart() {
  return (
    <div className="secondary_data">
      <div className="navigations">
        <div className="first">
          <h4>List of prior Surgeries</h4>
        </div>
        <div>
          <h4>List of Medical Diagnosis</h4>
        </div>
        <div>
          <h4>List of Medications</h4>
        </div>
        <div>
          <h4>Airway Evaluation</h4>
        </div>
        <div className="last">
          <h4>Anesthesia Clearence and Recomendation</h4>
        </div>
      </div>
      <div className="comments">
        <div className="comment_1">
          <div className="ques">
            <h4>First Time Surgery?</h4>
          </div>
          <div className="ans">
            <h4>No</h4>
          </div>
        </div>
        <div className="comment_2">
          <div className="ques">
            <h4>Family History of Surgical Complications?</h4>
          </div>
          <div className="ans">
            <h4>Yes</h4>
          </div>
        </div>
        <div className="comment_3">
          <div className="ques">
            <h4>If Yes, please provide more details.</h4>
          </div>
          <div className="ans long">
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              aspernatur libero voluptatibus numquam saepe repellendus, sequi
              repellat quisquam architecto cumque consectetur laborum iure,
              illo.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LowerPart;
