import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../reducers/filterReducer";

import "./Filter.css";

const Filter = () => {
  const filter = useSelector(({ filter }) => filter);
  const dispatch = useDispatch();

  return (
    <section className="filter-form-container">
      <form className="filter-form">
        <label htmlFor="input-filter">Filter: </label>
        <input
          name="filter"
          id="input-filter"
          value={filter}
          onChange={(event) => dispatch(setFilter(event.target.value))}
        />
      </form>
    </section>
  );
};

export default Filter;
