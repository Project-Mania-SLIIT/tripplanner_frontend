import React, { useEffect, useState } from "react";
import Sidenav from "../../../components/admin/sidenav";
import { Button, Table } from "react-bootstrap";
import axios from "axios";
import UpdUserModal from "../../../components/modals/User/UpdUserModal";
import Swal from "sweetalert2";

export default function index() {
  return (
    <div>
      <Sidenav/>
      <br/><div className="text-center">
            <br />
            <h1>Packages</h1>
            <br />
            {/* <AddHotelModal/> */}
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
                {/* {hotel.map((ht) => (
                  <tr key={ht._id}>
                    <td>{ht.name}</td>
                    <td>{ht.description}</td>
                    <td><img src={ht.image} style={{ width: "50px", height:"50px" }} alt="pic"/></td>
                    <td>{ht.city}</td>
                    <td>{ht.roomCount}</td>
                    <td>
                                    </td> 
                  </tr>
                ))} */}
              </tbody>
            </Table>
          </div>
    </div>
  )
}
