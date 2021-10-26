import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Form from "./components/Form";
import StateContext from "./contexts/StateContext";
import UseStateContext from "./contexts/UseStateContext";
import Results from "./components/ResultsContext";

function App() {
  const initialState = {
    buttonA: false,
    buttonB: false,
    buttonC: false,
    buttonD: false
  };

  const [checked, setChecked] =
    useState(initialState);
  return (
    <StateContext.Provider value={checked}>
      <UseStateContext.Provider
        value={setChecked}
      >
        <BrowserRouter>
          <div>
            <main>
              <div className="display-flex-ai-jc heading-banner">
                <h1>
                  State With Context Example
                </h1>
              </div>
              <Switch>
                <Route exact path="/">
                  <Form />
                </Route>
                <Route
                  exact
                  path="/results"
                  component={Results}
                />
              </Switch>
            </main>
          </div>
        </BrowserRouter>
      </UseStateContext.Provider>
    </StateContext.Provider>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector("#app")
);

/* code below makes so that browser does not
even reloaded the webpage.
It just loads the new javascript on the fly. 
*/

if (module.hot) {
  module.hot.accept();
}
