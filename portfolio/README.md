# Portfol.io

Project to build a portfolio hosting website for all levels of developers to enable the sharing of creative ideas.

## Components List

### App

Has the state 'portfolio' which stores the api call data depending on the search criteria.
Has the state resetClass which causes a reset search filter button to appear when specified searches are made to the api, uses the resetSearch function.
Has the state menuVis which causes the sidebar to slide on and off screen when the Navbar buttons are clicked, using the toggleMenu function.
Has aysnc function for basic api call for all portfolios and specified aysnc functions so search criteria dependent calls to the api and and postData aysnc function to send new portfolio data to the database.
Has useEffect for the initial api call on mount.
Returns the landingpage layout containing:

- Navbar
- MenuContainer
- Header
- Searchbars
- ExperienceSearch
- FolioList
- Footer

### ExperienceSearch

Creates a form with a drop-down menu which enables the user to search by the experience level of the porfolios.
Is passed the prop of the searchByExperience function from App index.js to call the api with the selected search parameter.

### Folio

Creates the individual cards for displaying the portfolios. This contains:

- Image
- Favourite Icon (heart)
- Designer's name
- Designers portfolio website link (opened in new tab)

Is passed indivdual portfolios data by the prop 'folio' that it uses to generate each card.

### FolioList

Cycles through the api data returned from the call and returns a folio card for each entry using the Folio component.
Is passed the prop 'portfolio' from api call. This is an array of objects matching the request.
If no data returned from the api call, will return "Sorry, no portfolios found with that search.".

### Footer

Creates a footer at the bottom of the page with the brand logo and social media icons using the FontAwesome npm.

### Header:

Creates a header with the brand logo and background image

### MenuContainer

Creates a container for the sidebar menu, enabling it to be hidden and displayed.

### Menu:

Creates a Menu in the sidebar for uploading a new portfolio through the upload form
Is passed the props:

- 'menuVis' - A state used to determine the menu's visibility using the toggleMenu function in the App index.js.
- 'closeMenu' - On click of the 'X' closes the sidebar menu.
- 'upload' - new upload data passed down from postData function.

### MenuButton

Creates an 'Upload' button on the Navbar that when clicked opens up the upload sidebar menu.
Is passed in the props onClick and type.

### Navbar

Creates a navigation bar with brand logo and 3 buttons; Upload, Login and Sign Up.
Takes in the prop menuOnClick that it passes to the MenuButton.

### Search

Creates a search input box with a button to submit a search.
Takes in the props:

- onSubmit - When button is clicked search is sent to the api
- type - the text to describe the type of search box

### Upload

Creates a form to take in the data for a new portfolio and sends that data to the database on submit.
Takes in the prop of 'upload' from the App index.js, passed down through the MenuContainer and Menu.

## Authors

- [Ben Greenwood](https://github.com/B-P-Greenwood)
- [Idman Abshir](https://github.com/idman01)
- [Hannah McFarlane](https://github.com/hcmcfarlane)
- [Tom Birbeck](https://github.com/TomBirbeck)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
