import React from "react";

export default function Spinner() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "200px" }}
    >
      <div className="spinner-container">
        <div className="spinner">
          <div className="spinner-circle"></div>
          <div className="spinner-circle"></div>
          <div className="spinner-circle"></div>
        </div>
        <style jsx>{`
          .spinner-container {
            position: relative;
            width: 80px;
            height: 80px;
          }

          .spinner {
            position: absolute;
            width: 100%;
            height: 100%;
            animation: rotate 2s linear infinite;
          }

          .spinner-circle {
            position: absolute;
            width: 100%;
            height: 100%;
            border: 4px solid transparent;
            border-radius: 50%;
            animation: spin 1.5s linear infinite;
          }

          .spinner-circle:nth-child(1) {
            border-top-color: #3498db;
            animation-delay: 0s;
          }

          .spinner-circle:nth-child(2) {
            border-right-color: #2ecc71;
            animation-delay: 0.5s;
          }

          .spinner-circle:nth-child(3) {
            border-bottom-color: #e74c3c;
            animation-delay: 1s;
          }

          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
