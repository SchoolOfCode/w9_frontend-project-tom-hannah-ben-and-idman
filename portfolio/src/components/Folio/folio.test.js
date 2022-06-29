import { test, expect } from "@jest/globals";
import { render, screen} from "@testing-library/react";
import Folio from "./index.js";
import "@testing-library/jest-dom";

test('Folio exists', () => {
    const folio = {site_url: "https://www.eunjeongyoo.com/",
    site_image:
        "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60edb894d267c8880e267733_1.jpg",
    description: "graphic designer",
    experience_level: "Experienced",
    keywords: "stylish art",
    designers_name: "eunjeongyoo",
}
    render(<Folio folio={folio}/>);
    expect(screen.getByRole('article')).toBeInTheDocument();
})
