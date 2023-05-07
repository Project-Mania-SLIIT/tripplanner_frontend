import React from "react";
const Footer = () => {
  return (
    <div>
      <footer
        className="text-center text-white mt-4"
        style={{ backgroundColor: "#1C4E80" }}
      >
        <hr className="text-dark" />
        <div className="container">
          <section className="mb-3">
            <a
              className="btn-link btn-floating btn-lg text-white"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn-link btn-floating btn-lg text-white"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn-link btn-floating btn-lg text-white"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-google" />
            </a>
            <a
              className="btn-link btn-floating btn-lg text-white"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              className="btn-link btn-floating btn-lg text-white"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              className="btn-link btn-floating btn-lg text-white"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github" />
            </a>
          </section>
        </div>
        <div
          className="text-center p-3"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            textColor: "#E0E0E0",
          }}
        >
          © 2023 Copyright:
          <a className="text-white" href="#">
            Traveloo
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
