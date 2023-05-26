import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Col, Row, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";

export default function UpdUserModal(props) {
    const [show, setShow] = useState(false);

    const [user, setUser] = useState("")
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [photo, setPhoto] = useState("");
    const [role, setRole] = useState("");

    const UserData = {
        username,
        email,
        photo,
        role
    };

    const UpdateShow = () => {
        console.log(props.usid);
        setUser(props.usid);
        axios
          .get("http://localhost:4000/api/v1/users/" + props.usid)
          .then(function (response) {
            setUsername(response.data.data["username"]);
            setEmail(response.data.data["email"]);
            setPhoto(response.data.data["photo"]);
            setRole(response.data.data["role"]);
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
          .put("http://localhost:4000/api/v1/users/update/" + props.usid, UserData)
          .then(function (response) {
            setUsername("");
            setEmail("");
            setPhoto("");
            setRole("");
            setShow(false);
            Swal.fire({
                title: "Success!",
                text: "User updated Successfully",
                icon: "success",
                confirmButtonText: "Ok",
            })
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
          <Modal.Title id="contained-modal-title-vcenter">Update User</Modal.Title>
        </Modal.Header>

        <Form>
          <Modal.Body>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Col sm={3}>
                <Form.Label>Image:z</Form.Label>
              </Col>
              <Col sm={8}>
              <Form.Group controlId="formFile">
                  <Form.Control
                    onChange={(e) => {
                        setPhoto(e.target.value);
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
                <Form.Label>Username:</Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
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
                <Form.Label>Email:</Form.Label>
              </Col>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  className="form-control"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
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
                <Form.Label>Role:</Form.Label>
              </Col>
              <Col sm={8}>
              <select
                  className="form-select"
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                >
                  <option selected>{role}</option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
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
  )
}
