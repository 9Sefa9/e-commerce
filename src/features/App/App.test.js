import { render, screen } from '@testing-library/react';
import App from './App';
import Home from "../Home/Home.js";
import Cart from "../Cart/Cart.js";
import Contact from "../Contact/Contact.js";
import User from"../User/User.js";
import SignIn from"../SignIn/SignIn.js";
import SignUp from"../SignUp/SignUp.js";
import { MemoryRouter } from 'react-router-dom';
//Spinner  suspense ?
jest.mock('../Home/Home.js')
jest.mock('../Cart/Cart.js')
jest.mock('../Contact/Contact.js')
jest.mock('../User/User.js')
jest.mock('../SignIn/SignIn.js')
jest.mock('../SignUp/SignUp.js')
describe("<App/> Testing", () =>{
  test('App rendering the default route => <Home/> ', async () => {
    //Arrange
    Home.mockImplementation()
    render(
      <MemoryRouter initialEntries={<Home/>}>
        <App/>
      </MemoryRouter>
    );
    
    //Act
    render(screen.get
    //Assert
    
  });

});

