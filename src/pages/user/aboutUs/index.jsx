import React from "react";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";

const index = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <br />

        <h1 className="fst-italic">
          <strong>WHO WE ARE</strong>
        </h1>
        <br />
        <section>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 d-flex justify-content-center">
              <div
                className=" bg-image hover-overlay ripple shadow-2-strong rounded-6 "
                data-mdb-ripple-color="light"
              >
                <img
                  src="https://images.unsplash.com/photo-1619120238346-978e07731e77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="img-fluid "
                />
              </div>
            </div>
            <div className="col-md-15 gx-5 mb-4 text-justify">
              <br />
              <h1>Welcome to Traveloo</h1>
              <h2> It's time to start your adventure </h2>
              <h5>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth. Far far
                away, behind the word mountains, far from the countries Vokalia
                and Consonantia, there live the blind texts. Separated they live
                in Bookmarksgrove right at the coast of the Semantics, a large
                language ocean. A small river named Duden flows by their place
                and supplies it with the necessary regelialia.
              </h5>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default index;
