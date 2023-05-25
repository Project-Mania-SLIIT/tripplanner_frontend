import React from "react";
import "./styles.css";

export default function Sidenav() {
  return (
    <div>
      <nav
        className="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-dark bg-dark navbar-expand-lg"
        id="navbar"
      >
        <div className="sidenav-header">
          <a className="brand" href="?">
            {/* <img src="https://thumbs.dreamstime.com/b/admin-office-binder-wooden-desk-table-colored-pencil-pencils-pen-notebook-paper-79046621.jpg" style={{width: '200px'}} alt="image"/> */}
          </a>
        </div>
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse row m-auto ml-sm-5 "
          id="navbarNav"
        >
          <div class="navbar-nav col-md-8">
            <a href="/" class="nav-item dash-link nav-link ">
              {" "}
              Dashboard <span class="sr-only">(current)</span>{" "}
            </a>
            <a href="/student" class="nav-item nav-link dash-link ">
              {" "}
              Places{" "}
            </a>
            <a href="/staff" class="nav-item nav-link dash-link">
              {" "}
              Hotels{" "}
            </a>
            <a href="?" class="nav-item nav-link dash-link">
              {" "}
              Packages{" "}
            </a>
          </div>
        </div>
      </nav>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            {/* <h1 class="fredoka"> Hello Jhon ! </h1> */}
          </div>
          <div class="col-md-7">
            <br />
            <h1 class="fredoka"> Hello Admin ! </h1>
          </div>
          <div class="col-md-2 ">
            <br />
            <i class="fa fa-bell icon-dash d-inline mr-4 yellow"> </i>
            <a href="?" class="btn btn-dash d-inline ">
              {" "}
              <i
                class="fa fa-user d-inline white icon-dash"
                style={{ fontsize: "15px" }}
              >
                {" "}
              </i>{" "}
              <span style={{ color: "white" }}>Log out</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
