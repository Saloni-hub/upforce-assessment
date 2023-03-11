import logo from "./logo.svg";
import "./App.css";
import CustomProgressHeader from "./Componants/CustomerProgressHeader";
import UserInformation from "./Componants/UserInformation";
import { Formik } from "formik";
import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { STEP_1, STEPS, STEP_2, STEP_3 } from "./constant";
import Address from "./Componants/UserAddress";
import userDetailsSchema from "./Componants/userDetailsSchema";
import FinalFormValue from "./Componants/FinalFormValue";
import {pick} from 'lodash'

function App() {
  const initialValues = {
    firstName: "",
    lastname: "",
  };
  const [activeStep, setActiveStep] = useState(STEP_1);
  const [completedStep, setCompletedStep] = useState(0);

  const handlePrevClick = () => {
    const prevStep = STEPS[activeStep].prev;
    if (prevStep) {
      setActiveStep(prevStep);
    }
  };
  const handleNextClick = () => {
    let nextStep = STEPS[activeStep].next;
    if (nextStep) {
      setActiveStep(nextStep);
      if (nextStep > completedStep) {
        setCompletedStep(completedStep + 1);
      }
    }
  };
  const checkValid = (values, keysToBeValidated) => {
    const picked = pick(values, keysToBeValidated);
    return !(Object.keys(picked).length > 0);
  };
  
  return (
    <Formik
      initialValues={{ initialValues }}
      validationSchema={userDetailsSchema}
      validateOnMount
      enableReinitialize
    >
      {({
        handleSubmit,
        touched,
        errors,
        dirty,
        values,
        setFieldValue,
        setValues,
      }) => (
        <div className="App-container">
          <div className="App">
            <CustomProgressHeader
              steps={["USER INFORMATION", "ADDRESS DETAILS", "THANK YOU"]}
              curStep={activeStep}
            />
            {activeStep === STEP_1 && (
              <UserInformation
                activeStep={activeStep}
                errors={errors}
                values={values}
                setFieldValue={setFieldValue}
              />
            )}
            {activeStep === STEP_2 && (
              <Address
                activeStep={activeStep}
                errors={errors}
                values={values}
                setFieldValue={setFieldValue}
              />
            )}
            {
              activeStep === STEP_3 && (
                <FinalFormValue values={values} activeStep={activeStep} />
              )
            }
            {activeStep !== STEP_3 && (
              <Stack direction="row" spacing={2} className="footerButton">
                <Button
                  variant="contained"
                  onClick={handlePrevClick}
                  disabled={activeStep === STEP_1}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  href="#contained-buttons"
                  onClick={handleNextClick}
                  // disabled={!checkValid(errors, STEPS[activeStep].keys)}
                >
                  Next
                </Button>
              </Stack>
            )}
          </div>
        </div>
      )}
    </Formik>
  );
}

export default App;
