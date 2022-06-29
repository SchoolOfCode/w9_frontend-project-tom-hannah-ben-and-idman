import { test, expect, jest } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Search from "./index.js";
//import fetchMock from 'fetch-mock';
//import App from "../App"

test(`search bar`, () => {
    const onChange = jest.fn()
    const type = "keyword"
    render(<Search type = {type} onSubmit = {onChange} />);
    expect(screen.getByLabelText(`Search by keyword:`)).toBeInTheDocument();
    });


test(`search bar button`, () => {
    
    render(<Search />);
    expect(screen.getByRole(`button`)).toBeInTheDocument();
    });



// test.only('search field', async () => {
//     const input = "animation";
//     const onSubmit = jest.fn();
//     fetchMock.mock(`http://localhost:3001/portfolio/?designer=animation`, 200);
//     var {getByTestId, findByTestId} = render(<App />)
//   fireEvent.click(getByTestId("apiCall"))
//   expect(await findByTestId("ptag")).toHaveTextContent('response');
// }) 