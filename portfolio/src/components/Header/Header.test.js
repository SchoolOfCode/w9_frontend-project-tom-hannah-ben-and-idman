import { test, expect } from "@jest/globals";
import { render, screen} from "@testing-library/react";
import Header from "./index.js";
import "@testing-library/jest-dom";

test('Header exists', () => {
    render(<Header/>);
    expect(screen.getByAltText('Portfol.io logo')).toBeInTheDocument();
})