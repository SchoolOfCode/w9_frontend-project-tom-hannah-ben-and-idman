import { test, expect } from "@jest/globals";
import { render, screen} from "@testing-library/react";
import Footer from "./index.js";
import "@testing-library/jest-dom";

test('Experience dropdown', () => {
    render(<Footer/>);
    expect(screen.getByAltText('Portfol.io logo')).toBeInTheDocument();
})
