import React from "react";
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

import arugam from "../../../assets/images/arugam.jpg"
import kingsbury from "../../../assets/images/kingsbury.jpg"
import jetwing from "../../../assets/images/jetwing.jpg"
import cinnamon from "../../../assets/images/cinnamon.jpg"
import ramada from "../../../assets/images/ramada.jpg"
import taj from "../../../assets/images/taj.jpg"
import dalada from "../../../assets/images/dalada.jpg"
import ninearch from "../../../assets/images/ninearch.jpg"
import sigiriya from "../../../assets/images/sigiriya.jpg"
import hikk from "../../../assets/images/hikk.jpg"
import cs1 from "../../../assets/images/carousel1.jpg"
import cs2 from "../../../assets/images/carousel2.jpg"
import cs3 from "../../../assets/images/carousel3.jpg"
import cs4 from "../../../assets/images/NAT.jpg"

export default function Home() {
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
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                src={hikk}
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Hikkaduwa package</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                src={arugam}
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Arugam Bay package</MDBCardTitle>
                <MDBCardText>This is a short card.</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                src={dalada}
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Sri Dalada Maligawa Package</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                src={ninearch}
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Nine Arch Bridge package</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                src={sigiriya}
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Sigiriya</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
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
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                src={arugam}
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Arugam Bay</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                src={ninearch}
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Nine Arch Bridge</MDBCardTitle>
                <MDBCardText>This is a short card.</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                src={sigiriya}
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Sigiriya</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                src={dalada}
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Sri Dalada Maligawa</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                src={hikk}
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Hikkaduwa</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
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
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                src={kingsbury}
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Kingsbury Hotel</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                src={cinnamon}
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Cinnamon Grand Hotel</MDBCardTitle>
                <MDBCardText>This is a short card.</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                src={jetwing}
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Jetwing Lagoon Hotel</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                src={ramada}
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Ramada Hotel</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-100">
              <MDBCardImage
                src={taj}
                alt="..."
                position="top"
              />
              <MDBCardBody>
                <MDBCardTitle>Taj Samudra Hotel</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
      <Footer />
    </div>
  );
}
