import { useState } from "react";
import { Button, Grid, Paper } from "@mui/material";
import CustomerDetailsForm from "./CustomerDetailsForm";
import BankDetailsForm from "./BankDetailsForm";
import AcknowledgmentForm from "./AcknowledgmentForm";

const ClaimApp = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <CustomerDetailsForm />;
      case 2:
        return <BankDetailsForm />;
      case 3:
        return <AcknowledgmentForm />;
      default:
        return <CustomerDetailsForm />;
    }
  };
  return (
    <>
      <Grid align="center">
        <Paper
          elevation={10}
          style={{
            alignContent: "center",
            width: 350,
            height: 300,
            margin: "0 auto",
          }}
        >
          <h3>Claim Form</h3>
          {renderStep()}
          <div style={{ marginTop: 20 }}>
            {step > 1 && (
              <Button variant="contained" onClick={prevStep}>
                Previous
              </Button>
            )}
            {step < 3 && (
              <Button
                variant="contained"
                onClick={nextStep}
                style={{ marginLeft: 8 }}
              >
                Next
              </Button>
            )}
          </div>
        </Paper>
      </Grid>
    </>
  );
};
export default ClaimApp;
