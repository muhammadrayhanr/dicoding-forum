/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from '../../global/CategoryItem';

function ThreadItemCategories({ thread }) {
  return (
    <p className="mt-4">
      {thread.categories.map((category, index) => (
        <CategoryItem
          key={`${category}${index}`}
          name={category}
        />
      ))}
    </p>
  );
}

ThreadItemCategories.propTypes = {
  thread: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ThreadItemCategories;
