import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        minHeight: "80vh",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)",
      }}
    >
      <div
        className="text-center p-5 rounded shadow"
        style={{
          background: "white",
          maxWidth: 420,
          width: "100%",
        }}
      >
        <div
          style={{
            fontSize: "6rem",
            fontWeight: 700,
            color: "#0d6efd",
            lineHeight: 1,
            letterSpacing: "2px",
          }}
        >
          404
        </div>
        <h2 className="mb-3" style={{ fontWeight: 600 }}>
          Page Not Found
        </h2>
        <p className="mb-4 text-muted" style={{ fontSize: "1.1rem" }}>
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="btn btn-primary px-4 py-2"
          style={{ fontWeight: 500, fontSize: "1.1rem" }}
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
