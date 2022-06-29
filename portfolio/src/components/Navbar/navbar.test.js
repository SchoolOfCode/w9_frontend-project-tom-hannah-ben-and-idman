import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './index';

describe("<Navbar />", () => {
  test("To test if login from navbar list is rendered ", () => {
   render(<Navbar />);
    //const login = screen.getByText("Login")
    const login = screen.getByText('Login');


    expect(login).toBeInTheDocument();
  });
});


