import React from "react";

import {
  FormControl,
  TextField,
} from "@mui/material";
import { STEP_2 } from "../constant";

const UserAddress = ({ activeStep, errors, values, setFieldValue }) => {
  if (activeStep !== STEP_2) {
    return null;
  }
  const { addressLine1, addressLine2, city, state, country, pinCode } =
    errors || {};
  return (
    <>
      <div className="container">
        <FormControl fullWidth>
          <TextField
            id="demo-helper-text-misaligned"
            placeholder="Address Line 1"
            value={values.addressLine1}
            onChange={(e) => setFieldValue("addressLine1", e.target.value)}
          />
          <p className="formError">{addressLine1}</p>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            id="demo-helper-text-misaligned"
            placeholder="Address Line 2"
            value={values.addressLine2}
            onChange={(e) => setFieldValue("addressLine2", e.target.value)}
          />
          <p className="formError">{addressLine2}</p>
        </FormControl>
      </div>
      <div className="mt-2 container">
        <FormControl fullWidth>
          <TextField
            id="demo-helper-text-misaligned"
            placeholder="City"
            name="city"
            value={values.city}
            onChange={(e) => setFieldValue("city", e.target.value)}
          />
          <p className="formError">{city}</p>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            name="state"
            id="demo-helper-text-misaligned"
            placeholder="State"
            value={values.state}
            onChange={(e) => setFieldValue("state", e.target.value)}
          />
          <p className="formError">{state}</p>
        </FormControl>
      </div>
      <div className="mt-2 container">
        <FormControl fullWidth>
          <TextField
            name="country"
            id="demo-helper-text-misaligned"
            placeholder="Country"
            value={values.country}
            onChange={(e) => setFieldValue("country", e.target.value)}
          />
          <p className="formError">{country}</p>
        </FormControl>
        <FormControl fullWidth>
          <TextField
            name="pinCode"
            type="number"
            id="demo-helper-text-misaligned"
            placeholder="Pin Code"
            value={values.pinCode}
            onChange={(e) => setFieldValue("pinCode", e.target.value)}
          />
          <p className="formError">{pinCode}</p>
        </FormControl>
      </div>
    </>
  );
};

export default UserAddress;
