// PLAN

// Search by keyword

// Search fn is a form.

// When form submitted,
// 1. grab value from search input
// 2. Loop through the portfolios array to search for the keyword
// 3. Each time the keyword is found, add that folio to a newArray
// 4. at end of the Loop, we will have a newArray filled with folios that contain the keyword
// 5. setPortfolio(newArray)
// 6. React does its thing
// 7. ????
// 8. Profit!

//if search done button appears to reset
import "./search.css";

export default function Search({ onSubmit, type, resetClass, onClick }) {
  return (
    <div>
      <form className="search-form" onSubmit={onSubmit}>
        <label>
          Search by {type}: <input type="text" name="searchInput" />
        </label>
        <button type="submit">Go</button>
      </form>
      <button className={resetClass} onClick={onClick}>
        Press to remove filter
      </button>
    </div>
  );
}
