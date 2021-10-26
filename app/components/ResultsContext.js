import React, {
  useState,
  useEffect,
  useContext
} from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import StateContext from "../contexts/StateContext";
import UseStateContext from "../contexts/UseStateContext";
import Loading from "./Loading";

const resultsMessages = {
  buttonA: "You have selected button A",
  buttonB: "You have selected button B",
  buttonC: "You have selected button C",
  buttonD: "You have selected button D"
};

function Results() {
  const contextChecked = useContext(StateContext);
  const contextSetChecked = useContext(
    UseStateContext
  );
  const [resultsData, setResultsData] =
    useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      let trueKeys = Object.keys(
        contextChecked
      ).filter(x => contextChecked[x] == true);
      let resultsMessageKeys = trueKeys.map(
        x => resultsMessages[x]
      );
      setResultsData(resultsMessageKeys);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <div className="checkbox">
        {resultsData.map((result, idx) => {
          return (
            <div key={idx}>
              <h1>{result}</h1>
            </div>
          );
        })}
      </div>
      <Link to="/">
        <Button
          variant="contained"
          color="secondary"
        >
          Home
        </Button>
      </Link>
    </>
  );
}

export default Results;
