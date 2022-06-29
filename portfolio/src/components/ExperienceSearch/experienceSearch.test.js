import { test, expect, jest } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import ExperienceSearch from "./index.js";
import "@testing-library/jest-dom";

test(`ExperienceSearch`, () => {
    const onChange = jest.fn()
    render(<ExperienceSearch onChange = {onChange} />);
    expect(screen.getByText('Search by designer experience level')).toBeInTheDocument();
    });

test('Experience dropdown', () => {
    render(<ExperienceSearch/>);
    expect(screen.getByDisplayValue('Select option')).toBeInTheDocument();
})
test('Experience dropdown options', () => {
    render(<ExperienceSearch />);
    expect(screen.getByDisplayValue('Select option')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Mid-level'))
    expect(screen.getByText('Mid-level')).toBeInTheDocument();
})

test.only('Experience dropdown options when clicked', () => {
    const OnChange = jest.fn(e => e.preventDefault())
    render(<ExperienceSearch onChange={OnChange}/>);
    const clicked = screen.getByDisplayValue('Select option')
    //console.log(clicked)
    //console.log(clicked.children[1])
    fireEvent.change(clicked, {target: {value: 'Beginner'}})
    expect(OnChange).toHaveBeenCalledTimes(1);
})