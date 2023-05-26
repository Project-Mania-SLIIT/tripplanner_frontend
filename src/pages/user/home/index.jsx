import React, { useState, useEffect } from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBCol,
  MDBRow,
  MDBCardTitle,
} from "mdb-react-ui-kit";

import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import hikk from "../../../assets/images/hikk.jpg";
import cs2 from "../../../assets/images/carousel2.jpg";
import cs3 from "../../../assets/images/carousel3.jpg";
import cs4 from "../../../assets/images/NAT.jpg";
import axios from "axios";

export default function Home() {
  const [blog, setBlog] = useState([]);
  const [hotel, setHotel] = useState([]);
  const [tour, setTour] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/blog/latest")
      .then((res) => {
        setBlog(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/hotel/latest")
      .then((res) => {
        setHotel(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/tours/latest")
      .then((res) => {
        setTour(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <MDBCarousel showControls showIndicators>
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={1}
            src={cs4}
            alt="..."
          >
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselItem>
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={2}
            src={cs2}
            alt="..."
          >
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselItem>
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={3}
            src={cs3}
            alt="..."
          >
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </MDBCarouselItem>
        </MDBCarousel>
      </div>
      <div>
        <br />
        <h2>
          <strong>Featured Packages</strong>
        </h2>
      </div>
      <div>
        <MDBRow className="row-cols-1 row-cols-md-5 g-4">
        {tour.map((tour) => (
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage src={tour.photo} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>{tour.title}</MDBCardTitle>
                <MDBCardText>
                 {tour.desc}
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
        </MDBRow>
      </div>

      <div>
        <br />
        <h2>
          <strong>Places To Visit</strong>
        </h2>
      </div>
      <div>
        <MDBRow className="row-cols-1 row-cols-md-5 g-4">
          {blog.map((blog) => (
            <MDBCol>
              <MDBCard className="h-100">
                <MDBCardImage src={blog.image} alt="..." position="top" />
                <MDBCardBody>
                  <MDBCardTitle>{blog.title}</MDBCardTitle>
                  <MDBCardText>{blog.description}</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </div>

      <div>
        <br />
        <h2>
          <strong>Featured Hotels</strong>
        </h2>
      </div>
      <div>
        <MDBRow className="row-cols-1 row-cols-md-5 g-4">
          {hotel.map((hotel) => (
            <MDBCol>
              <MDBCard className="h-100">
                <MDBCardImage src={hotel.image} alt="..." position="top" />
                <MDBCardBody>
                  <MDBCardTitle>{hotel.name}</MDBCardTitle>
                  <MDBCardText>{hotel.description}</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </div>
      <Footer />
    </div>
  );
}
