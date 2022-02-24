import PropTypes from "prop-types";

import { FilterDescription, FilterContact, Input } from "./Filter.styled";

import { useDispatch, useSelector } from "react-redux";

import { filterSlice } from "../../redux/filterSlice";

export const { update } = filterSlice.actions;

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(({ filter }) => filter);
  const onChange = ({ target: { value } }) =>
    dispatch(update(value.toLowerCase()));
  return (
    <FilterContact>
      <FilterDescription>Find contact by name</FilterDescription>
      <Input value={filter} onChange={onChange} />
    </FilterContact>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Filter;
