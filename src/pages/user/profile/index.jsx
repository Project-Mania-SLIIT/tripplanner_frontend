import React from "react";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import Button from "react-bootstrap/Button";
import { Col, Row, Form } from "react-bootstrap";
import { MDBCol } from "mdb-react-ui-kit";

export default function Profile() {
  return (
    <div>
      <Navbar />
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-9  ">
          <Form>
            <fieldset>
              <Form.Group as={Col} className="p-2 bd-highlight">
                <Col>
                  <Form.Label as="legend" column sm={2}></Form.Label>
                </Col>
                <Col sm={8}><h1>User Profile</h1></Col>
                <Col sm={7}>
                  <MDBCol lg="4" md="12" className="mb-4">
                    <img
                      src="https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_960_720.png"
                      className="img-fluid rounded"
                      alt=""
                    />
                  </MDBCol>
                  <Button variant="secondary">Edit Image</Button>
                </Col>
              </Form.Group>
            </fieldset>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Full Name
              </Form.Label>
              <Col sm="7">
                <Form.Control type="text" />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Age
              </Form.Label>
              <Col sm="5">
                <Form.Control type="date" />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Email Address
              </Form.Label>
              <Col sm="7">
                <Form.Control type="text" />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Address
              </Form.Label>
              <Col sm="7">
                <Form.Control type="textarea" />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Phone Number
              </Form.Label>
              <Col sm="7">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
