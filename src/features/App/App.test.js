import { render, screen, wait, waitFor } from "@testing-library/react";
import App from "./App";
import Home from "../Home/Home.js";
import Cart from "../Cart/Cart.js";
import Contact from "../Contact/Contact.js";
import User from "../User/User.js";
import SignIn from "../SignIn/SignIn.js";
import SignUp from "../SignUp/SignUp.js";
import { MemoryRouter } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import React from "react";
import Spinner from "../Spinner/Spinner";
//Spinner and suspense ?
jest.mock("../Spinner/Spinner.js");
jest.mock("../Home/Home.js");
jest.mock("../NavigationBar/NavigationBar.js");
jest.mock("../Cart/Cart.js");
jest.mock("../Contact/Contact.js");
jest.mock("../User/User.js");
jest.mock("../SignIn/SignIn.js");
jest.mock("../SignUp/SignUp.js");
describe("<App/> Testing", () => {
  test("App rendering the Router-Components (lazily)", async () => {
    //Arrange
    NavigationBar.mockImplementation(() => <div>NavigationBarMock</div>);
    Home.mockImplementation(() => <div>HomeMock</div>);
    Cart.mockImplementation(() => <div>CartMock</div>);
    Contact.mockImplementation(() => <div>ContactMock</div>);
    User.mockImplementation(() => <div>UserMock</div>);
    SignIn.mockImplementation(() => <div>SignInMock</div>);
    SignUp.mockImplementation(() => <div>SignUpMock</div>);

    //Act
    render(
      <div>
        <React.Suspense fallback={<Spinner />}>
        <NavigationBar />
        <MemoryRouter initialEntries={["/"]}>
          <Home />
          <Cart />
          <Contact/>
          <User/>
          <SignIn/>
          <SignUp/>
        </MemoryRouter>
        </React.Suspense>
      </div>
    );

    //Assert

    
    expect(screen.getByText(/NavigationBarMock/)).toBeInTheDocument();
    expect(await waitFor(()=>screen.getByText(/HomeMock/))).toBeInTheDocument();
    expect(await waitFor(()=>screen.getByText(/CartMock/))).toBeInTheDocument();
    expect(await waitFor(()=>screen.getByText(/ContactMock/))).toBeInTheDocument();
    expect(await waitFor(()=>screen.getByText(/UserMock/))).toBeInTheDocument();
    expect(await waitFor(()=>screen.getByText(/SignInMock/))).toBeInTheDocument();
    expect(await waitFor(()=>screen.getByText(/SignUpMock/))).toBeInTheDocument();
    //screen.getByRole('');
  });
  
  test('App rendering the <Spinner/> before loading all Components inside of <App/>  ', async () => {
    //Arrange
    Spinner.mockImplementation(() => <div>SpinnerMock</div>);
    //Act
    render(
      <Spinner/>
    );
    //Assert
    expect(await waitFor(()=>screen.getByText(/SpinnerMock/))).toBeInTheDocument();
  });

});
