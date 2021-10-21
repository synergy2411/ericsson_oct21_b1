import AuthContext from "../../../store/auth-context";
import { useContext } from "react";

const FilterYear = (props) => {
  //   const onChangeYear = (event) => {
  //     props.onChangeFilterYear(event.target.value);
  //   };
  const context = useContext(AuthContext);

  const onChangeYear = (event) =>
    context.onChangeFilterYear(event.target.value);
  return (
    <select
      className="form-control"
      onChange={onChangeYear}
      value={props.selectedYear}
    >
      <option value="2022">2022</option>
      <option value="2021">2021</option>
      <option value="2020">2020</option>
      <option value="2019">2019</option>
    </select>
  );
};

export default FilterYear;
