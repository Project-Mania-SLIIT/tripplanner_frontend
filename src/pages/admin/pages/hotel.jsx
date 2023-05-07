import React from 'react';
import {
  MDBInput,

  MDBFile
} from 'mdb-react-ui-kit';

export default function hoteladmin() {
  return (
    <form>
      <MDBInput id='form4Example1' wrapperClass='mb-4' label='Name' />
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email address' />
      <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={4} label='Message' />
      <MDBFile label='Default file input example' id='customFile' />
    </form>
  );
}