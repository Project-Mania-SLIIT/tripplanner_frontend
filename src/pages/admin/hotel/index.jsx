/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Sidenav from "../../../components/admin/sidenav";
import { Button, Table } from "react-bootstrap";
import axios from "axios";
import UpdUserModal from "../../../components/modals/User/UpdUserModal";
import Swal from "sweetalert2";
import AddHotelModal from "../../../components/modals/Hotel/AddHotelModal";

export default function Index() {
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/hotel/")
      .then((res) => {
        console.log(res);
        if (Array.isArray(res.data.data)) {
          setHotel(res.data.data);
        } else {
          console.log("Invalid data format received from API");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Sidenav />
      <br />
      <div className="text-center">
        <br />
        <h1>Hotels</h1>
        <br />
        <AddHotelModal />
        <br />
        <br />
        <Table striped>
          <thead>
            <tr>
              <th>Hotel Name</th>
              <th>Description</th>
              <th>City</th>
              <th>Image</th>
              <th>Room Count</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {hotel.map((ht) => (
              <tr key={ht._id}>
                <td>{ht.name}</td>
                <td>{ht.description}</td>
                <td>
                  <img
                    src={ht.image}
                    style={{ width: "50px", height: "50px" }}
                    alt="pic"
                  />
                </td>
                <td>{ht.city}</td>
                <td>{ht.roomCount}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
