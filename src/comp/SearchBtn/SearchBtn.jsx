import "./SearchBtn.scss";
import country from "./countries.json";
import categories from "./cateogry.json";

function SearchBtn() {
  return (
    <div className="searchbtn-field">
      <div className="searchbtn">
        <input
          type="text"
          className="searchbtn-keyword"
          placeholder="Search Keywords..."
        />

        <select name="country" id="">
          <option data-display="Location" default>
            All Country
          </option>
          {country.map((e, index) => (
            <option key={index}>{e.name}</option>
          ))}
        </select>

        <select name="catogory" id="">
          <option data-display="catogory" default>
            All Catogory
          </option>
          {categories.map((e, index) => (
            <option key={index}>{e.name}</option>
          ))}
        </select>

        <button>Search</button>
      </div>
    </div>
  );
}
export default SearchBtn;
