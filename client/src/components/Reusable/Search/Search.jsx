import classes from "../reuse.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dispatchSearch = (searchQuery) =>
    dispatch({ type: "SEARCH", payload: searchQuery });

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.search.value.trim();
    dispatchSearch(searchQuery);
    navigate("/products");
  };

  return (
    <form
      onSubmit={handleSearch}
      className={`d-flex  ${classes.searchForm} me-4`}
    >
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search for a product"
        name="search"
      />
      <button className={`btn ${classes.searchBtn}`} type="submit">
        <i className="pi pi-search" />
      </button>
    </form>
  );
};

export default Search;
