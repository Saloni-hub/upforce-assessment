import React, { useState } from "react";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { GENDER, MARITAL_STATUS, STEP_1 } from "../constant";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const UserInformation = ({ activeStep, errors, values, setFieldValue }) => {
  if (activeStep !== STEP_1) {
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
  } = errors || {};

  return (
    <>
      <div className="container">
        <FormControl fullWidth>
          <TextField
            name="firstName"
            id="demo-helper-text-misaligned"
            placeholder="First name"
            value={values.firstName}
            onChange={(e) => setFieldValue("firstName", e.target.value)}
            size="small"
          />
          <p className="formError">{firstName}</p>
        </FormControl>
        <FormControl fullWidth className="pl-3">
          <TextField
            size="small"
            name="middleName"
            id="demo-helper-text-misaligned"
            placeholder="Middle name"
            value={values.middleName}
            onChange={(e) => setFieldValue("middleName", e.target.value)}
          />
          <p className="formError">{middleName}</p>
        </FormControl>
      </div>
      <div className="container">
        <FormControl fullWidth>
          <TextField
            size="small"
            name="lastName"
            i="demo-helper-text-misaligned"
            placeholder="Last name"
            value={values.lastName}
            onChange={(e) => setFieldValue("lastName", e.target.value)}
          />
          <p className="formError">{lastName}</p>
        </FormControl>
        <FormControl fullWidth className="pl-3">
          <TextField
            size="small"
            name="mobileNo"
            id="demo-helper-text-misaligned"
            placeholder="Mobile No"
            value={values.mobileNo}
            onChange={(e) => setFieldValue("mobileNo", e.target.value)}
          />
          <p className="formError">{mobileNo}</p>
        </FormControl>
      </div>
      <div className="container">
        <FormControl fullWidth>
          <TextField
            size="small"
            name="email"
            id="demo-helper-text-misaligned"
            placeholder="Email"
            value={values.email}
            onChange={(e) => setFieldValue("email", e.target.value)}
          />
          <p className="formError">{email}</p>
        </FormControl>
        <FormControl fullWidth className="pl-3">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={values.dob}
              name="dob"
              onChange={(newValue) => setFieldValue("dob", newValue)}
            />
          </LocalizationProvider>

          <p className="formError">{dob}</p>
        </FormControl>
      </div>
      <div className="container">
        <FormControl fullWidth>
          <TextField
            size="small"
            name="age"
            id="demo-helper-text-misaligned"
            placeholder="Age"
            value={values.age}
            onChange={(e) => setFieldValue("age", e.target.value)}
          />
          <p className="formError">{age}</p>
        </FormControl>
        <FormControl fullWidth className="pl-3">
          <TextField
            size="small"
            name="bloodGroup"
            id="demo-helper-text-misaligned"
            placeholder="Blood Group"
            value={values.bloodGroup}
            onChange={(e) => setFieldValue("bloodGroup", e.target.value)}
          />
          <p className="formError">{bloodGroup}</p>
        </FormControl>
      </div>
      <div className="container">
        <FormControl fullWidth>
          <TextField
            size="small"
            name="height"
            id="demo-helper-text-misaligned"
            placeholder="Height"
            value={values.height}
            onChange={(e) => setFieldValue("height", e.target.value)}
          />
          <p className="formError">{height}</p>
        </FormControl>
        <FormControl fullWidth className="pl-3">
          <TextField
            size="small"
            name="weight"
            id="demo-helper-text-misaligned"
            placeholder="Weight"
            value={values.weight}
            onChange={(e) => setFieldValue("weight", e.target.value)}
          />
          <p className="formError">{weight}</p>
        </FormControl>
      </div>
      <div className="container">
        <FormControl fullWidth>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            {GENDER.map(({ label, value }) => {
              return (
                <FormControlLabel
                  name="gender"
                  value={value}
                  control={<Radio />}
                  label={label}
                  key={value}
                  checked={values.gender === value}
                  onChange={(e) => setFieldValue("gender", value)}
                />
              );
            })}
          </RadioGroup>
          <p className="formError">{gender}</p>
        </FormControl>
        <FormControl fullWidth className="pl-3">
          <FormLabel id="demo-row-radio-buttons-group-label">
            Marital Status
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            {MARITAL_STATUS.map(({ label, value }) => {
              return (
                <FormControlLabel
                  value={value}
                  checked={values.maritalStatus === value}
                  control={<Radio />}
                  name="maritalStatus"
                  label={label}
                  key={value}
                  onClick={() => setFieldValue("maritalStatus", value)}
                />
              );
            })}
          </RadioGroup>
          <p className="formError">{maritalStatus}</p>
        </FormControl>
      </div>
    </>
  );
};

export default UserInformation;
