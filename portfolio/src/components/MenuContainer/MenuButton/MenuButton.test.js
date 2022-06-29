import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import MenuButton from "./index";



test.only('clicking the upload button toggles the upload form', () => {
    const onClick = jest.fn()
    //render(<Navbar />);
     render (<MenuButton  type= "upload" onClick ={onClick}/>);
     const button = screen.getByTestId("upload id")
     fireEvent.click(button)
     console.log(button)
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(screen.getByText('Upload')).toBeInTheDocument()
});
