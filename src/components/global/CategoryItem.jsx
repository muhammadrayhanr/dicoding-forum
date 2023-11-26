import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilterThreadCategory } from '../../states/filterThreadCategory/action';

function CategoryItem({ name, isActive }) {
  const dispatch = useDispatch();

  const onFilterThreadByCategory = () => {
    dispatch(setFilterThreadCategory(isActive ? '' : name));
  };

  return (
    <button
      type="button"
      className={`
        py-2
        ${isActive ? 'font-bold underline' : ''}
      `}
      onClick={onFilterThreadByCategory}
    >
      {`#${name.substr(0, 50)}`}
    </button>
  );
}

CategoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

CategoryItem.defaultProps = {
  isActive: false,
};

export default CategoryItem;
