import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, changeFilterInput }) => (
  <label className={s.findFild}>
    Find contacts by name
    <input
      className={s.inputFind}
      type="text"
      name="filter"
      value={value}
      onChange={changeFilterInput}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilterInput: PropTypes.func.isRequired,
};
export default Filter;
