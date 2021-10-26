import React, {
  useState,
  useEffect,
  useContext
} from "react";
import { Link } from "react-router-dom";
import StateContext from "../contexts/StateContext";
import UseStateContext from "../contexts/UseStateContext";
import {
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";

function Form() {
  const contextChecked = useContext(StateContext);
  const contextSetChecked = useContext(
    UseStateContext
  );

  const handleChange = event => {
    contextSetChecked({
      ...contextChecked,
      [event.target.name]: event.target.checked
    });
  };

  return (
    <>
      <div className="checkbox">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="buttonA"
                checked={contextChecked.buttonA}
                onChange={handleChange}
                inputProps={{
                  "aria-label": "primary checkbox"
                }}
              />
            }
            label="Button A"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="buttonB"
                checked={contextChecked.buttonB}
                onChange={handleChange}
                inputProps={{
                  "aria-label": "primary checkbox"
                }}
              />
            }
            label="Button B"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="buttonC"
                checked={contextChecked.buttonC}
                onChange={handleChange}
                inputProps={{
                  "aria-label": "primary checkbox"
                }}
              />
            }
            label="Button C"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="buttonD"
                checked={contextChecked.buttonD}
                onChange={handleChange}
                inputProps={{
                  "aria-label": "primary checkbox"
                }}
              />
            }
            label="Button D"
          />
        </FormGroup>
        <Link to="/results">
          <Button
            type="submit"
            variant="contained"
            color="secondary"
          >
            Submit
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Form;
