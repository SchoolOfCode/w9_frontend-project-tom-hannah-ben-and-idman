import { test, expect } from "@jest/globals";
import { render, screen} from "@testing-library/react";
import Foliolist from "./index.js";
import "@testing-library/jest-dom";

test('Folio exists', () => {
    const folio = [
        {
            portfolio_id: 1,
            site_url: "https://www.eunjeongyoo.com/",
            site_image:
                "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60edb894d267c8880e267733_1.jpg",
            description: "graphic designer",
            experience_level: "Experienced",
            keywords: "stylish art",
            designers_name: "eunjeongyoo",
        },
        {
            portfolio_id: 2,
            site_url: "https://dribbble.com/lapatun_dolka",
            site_image:
                "https://cdn.dribbble.com/users/2422127/screenshots/14523783/media/9d8061753c098e73cef420894b58a46f.gif",
            designers_name: "Alexander Dolnikov",
            keywords: "animation",
            description: "2D animation",
            experience_level: "Experienced",
        },
        {
            portfolio_id: 3,
            site_url: "http://www.hm-creative.com/",
            site_image:
                "https://cdn.dribbble.com/userupload/2950300/file/original-a77d596a12e645083835f4581110909e.png?resize=1612x1210",
            designers_name: "Helena Olson",
            keywords: "Typography",
            description: "Free lance graphic designer",
            experience_level: "Experienced",
        },
        {
            portfolio_id: 4,
            site_url: "https://jordanhughes.co/",
            site_image:
                "https://d33wubrfki0l68.cloudfront.net/0eb1d64625bc1f82104d6407acea2780b503e499/2c1e8/images/upguard-feature_1.jpg",
            designers_name: "Jordan Hughes",
            keywords: "UX/UI",
            description: "UX/UI design",
            experience_level: "Experienced",
        },
        {
            portfolio_id: 5,
            site_url: "https://dribbble.com/germanirina",
            site_image:
                "https://cdn.dribbble.com/users/2034980/screenshots/18222773/media/d83a47c5d6f6328f0c82123e1c727a05.png?compress=1&resize=450x338&vertical=top",
            designers_name: "Irina German",
            keywords: "Web design",
            description: "Graphic designer",
            experience_level: "Experienced",
        },
        {
            portfolio_id: 6,
            site_url: "https://www.joebentaylor.co.uk/",
            site_image:
                "https://cdn.dribbble.com/users/432077/screenshots/18060224/media/e22dabea4bb4a47f959b8f89ef940ae9.jpg?compress=1&resize=450x338&vertical=top",
            designers_name: "Joe Taylor",
            keywords: "Branding",
            description: "Logo Specialist, Web Designer & Developer",
            experience_level: "Experienced",
        }]
    render(<Foliolist portfolio={folio}/>);
    const foliolength = screen.getAllByRole('article')
    expect(foliolength).toHaveLength(6);
})

test('No portfolios sent', () => {
    const folio = []
    render(<Foliolist portfolio={folio}/>);
    const foliolength = screen.getByText('Sorry, no portfolios found with that search.')
    expect(foliolength).toBeInTheDocument();
})