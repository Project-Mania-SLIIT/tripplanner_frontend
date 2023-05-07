import React from "react";
import Sidenav from "../../../components/admin/sidenav";
import { MDBInput, MDBFile } from "mdb-react-ui-kit";

export default function Dashboard() {
  return (
    <div>
      <Sidenav />
      <div class="container-fluid ">
        <div class="row">
          <div class="col-md-4"></div>
          <div class="col-md-5">
            <div class="dbox dbox--color-2">
              <div class="dbox__body">
                <form>
                  <MDBInput
                    id="form4Example1"
                    wrapperClass="mb-4"
                    label=" Name Of Place"
                  />
                  <MDBInput
                    type="email"
                    id="form4Example2"
                    wrapperClass="mb-4"
                    label="Location"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    textarea
                    id="form4Example3"
                    rows={4}
                    label="Description"
                  />
                  <MDBFile label="Upload Picture" id="customFile" />
                </form>
              </div>

              <div class="dbox__action"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
