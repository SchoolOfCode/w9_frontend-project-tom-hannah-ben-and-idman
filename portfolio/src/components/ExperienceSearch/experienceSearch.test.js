import { test, expect, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import ExperienceSearch from "./index.js";
import "@testing-library/jest-dom";

test(`ExperienceSearch`, () => {
    const onChange = jest.fn()
    render(<ExperienceSearch onChange = {onChange} />);
    expect(screen.getByText('Search by designer experience level')).toBeInTheDocument();
    });
