import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { STEP_3 } from "../constant";
import { format } from 'date-fns'


const FinalFormValue = ({ values, activeStep }) => {
  if (activeStep !== STEP_3) {
    return null;
  }
  const {
    firstName,
    middleName,
    lastName,
    mobileNo,
    email,
    dob,
    age,
    bloodGroup,
    height,
    weight,
    gender,
    maritalStatus,
    addressLine1,
    addressLine2,
    city,
    state,
    country,
    pinCode,
  } = values || {};

  function createData(name, value) {
    return { name, value };
  }

  const rows = [
    createData("FirstName", firstName),
    createData("MiddleName", middleName),
    createData("LastName", lastName),
    createData("MobileNo", mobileNo),
    createData("Email", email),
    createData("Age", age),
    createData("Birthay", format(new Date(dob),'dd-MM-yyyy')),
    createData("Age", age),
    createData("BloodGroup", bloodGroup),
    createData("Height", height),
    createData("Weight", weight),
    createData("Gender", gender),
    createData("MaritalStatus", maritalStatus),
    createData("AddressLine1", addressLine1),
    createData("AddressLine2", addressLine2),
    createData("City", city),
    createData("State", state),
    createData("Country", country),
    createData("PinCode", pinCode),
  ];

  return (
    <div>
      <p className="successs-toast">Data added successully </p>
      <TableContainer component={Paper} style={{height:'60vh'}}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FinalFormValue;
