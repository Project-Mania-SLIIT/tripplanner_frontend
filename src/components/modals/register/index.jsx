import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import axios from "axios";
import Form from "react-bootstrap/Form";

export default function Register() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    image: "",
    role: "",
  });

  const validate = () => {
    let isValidate = true;
    const regexname = /^[a-zA-Z ]*$/;
    const regexemail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const regexpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
    if (!formData.name || !regexname.test(formData.name)) {
      isValidate = false;
      Swal.fire({
        title: "Error!",
        text: "Please enter a valid name.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    if (!formData.email || !regexemail.test(formData.email)) {
      isValidate = false;
      Swal.fire({
        title: "Error!",
        text: "Please enter a valid email address.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    if (!formData.password || !regexpassword.test(formData.password)) {
      isValidate = false;
      Swal.fire({
        title: "Error!",
        text: "Please enter a valid password. Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    return isValidate;
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    if (validate()) {
      await axios
        .post("http://localhost:5002/user/register", {
          formData,
        })
        .then((res) => {
          Swal.fire({
            title: "Success!",
            text: "Registration Successful",
            icon: "success",
            confirmButtonText: "Ok",
          });
        })
        .catch((err) => {
          Swal.fire({
            title: "Registration Failed!",
            text: err.response.data,
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="light" onClick={handleShow}>
        Register
      </Button>

      <Modal size="m" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="form-row">
              <div class="form-group col-md-12">
                <label for="inputEmail4">Upload Profile Picture</label>
                <Form.Group controlId="formFile">
                  <Form.Control type="file" />
                </Form.Group>
              </div>
              <div class="form-group col-md-12">
                <label for="inputEmail4">Enter Username</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                ></input>
              </div>
              <div class="form-group col-md-12">
                <label for="inputEmail4">Enter Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                ></input>
              </div>
              <div class="form-group col-md-12">
                <label for="inputPassword4">Enter Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                ></input>
              </div>
              <div class="form-group col-md-12">
                <label for="inputPassword4">Select Role</label>
                <select class="form-select">
                  <option value="user" selected>
                    User
                  </option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSubmit}>
            Register
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
