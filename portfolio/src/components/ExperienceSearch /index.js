
import "./experienceSearch.css";

export default function ExperienceSearch({onChange}) {
  return (
    <div>
        <form className="experience-search-form">
        <label>Search by designer experience level </label>
        <select name="searchInput" className="experience-search" onChange={onChange}>
          <option value="initial" selected disabled hidden>Select option</option>
          <option value="Beginner">Beginner</option>
          <option value="Mid-level">Mid-level</option>
          <option value="Experienced">Experienced</option>
        </select>
        </form>
    </div>
  );
}