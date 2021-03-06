import "./index.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import Spinner from "./features/Spinner/Spinner";
import reportWebVitals from "./reportWebVitals";
const App = React.lazy(() => import("./features/App/App.js"));

ReactDOM.render(
  <Suspense fallback={<Spinner />}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
