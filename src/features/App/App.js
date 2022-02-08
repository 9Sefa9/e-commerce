import "./AppStylesheet.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import Spinner from "../Spinner/Spinner";
const Home = React.lazy(()=> import("../Home/Home.js"));
const Cart = React.lazy(()=> import("../Cart/Cart.js"));
const Contact = React.lazy(()=> import("../Contact/Contact.js"));
const User = React.lazy(()=> import("../User/User.js"));
const SignIn = React.lazy(()=> import("../SignIn/SignIn.js"));
const SignUp = React.lazy(()=> import("../SignUp/SignUp.js"));

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user" element={<User />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
