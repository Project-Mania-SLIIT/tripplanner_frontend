import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Row, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";

export default function UpdHotelModal(props) {
  const [show, setShow] = useState(false);

  const [hotel, setHotel] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [roomCount, setRoomcount] = useState("");
  const [image, setImage] = useState("");

  const HotData = {
    name,
    description,
    city,
    roomCount,
    image,
    // revid,
  };
  const UpdateShow = () => {
    console.log(props.hsid);
    setHotel(props.hsid);
    axios
      .get("http://localhost:4000/api/v1/hotel/single/" + props.hsid)
      .then(function (response) {
        setName(response.data["name"]);
        setDescription(response.data["description"]);
        setCity(response.data["city"]);
        setRoomcount(response.data["roomCount"]);
        setImage(response.data["image"]);
        setShow(true);
      })
      .catch(function (error) {
        console.log(error);
        alert("invalid");
      });
  };

  function submitForm(e) {
    e.preventDefault();
    axios
      .put("http://localhost:4000/api/v1/hotel/update/" + props.hsid, HotData)
      .then(function (response) {
        setName("");
        setDescription("");
        setCity("");
        setRoomcount("");
        setImage("");
        setShow(false);
        Swal.fire({
          title: "Success!",
          text: "User updated Successfully",
          icon: "success",
        });
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleClose = () => setShow(false);

  return (
    <>
      <Button className="btn btn-success ms-1" onClick={UpdateShow}>
        Edit
      </Button>

      <Modal show={show} size="lg" centered>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Hotel
          </Modal.Title>
        </Modal.Header>

        <Form>
          <Modal.Body>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Col sm={3}>
                <Form.Label>Image:</Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Group controlId="formFile">
                  <Form.Control
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                    type="file"
                  />
                </Form.Group>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Col sm={3}>
                <Form.Label>Name:</Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Col sm={3}>
                <Form.Label>Description:</Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  className="form-control"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Col sm={3}>
                <Form.Label>Roomcount:</Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  className="form-control"
                  value={roomCount}
                  onChange={(e) => {
                    setRoomcount(e.target.value);
                  }}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Col sm={3}>
                <Form.Label>City:</Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  className="form-control"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Exit
            </Button>
            <Button variant="primary" type="submit" onClick={submitForm}>
              Update User
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
