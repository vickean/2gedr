import React from "react";
import ReactDOM from "react-dom";
import { LandingPage } from "./containers/LandingPage";
import { MainContainer } from "./containers/MainContainer";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
   <React.StrictMode>
      <MainContainer>
         <LandingPage />
      </MainContainer>
   </React.StrictMode>,
   document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
