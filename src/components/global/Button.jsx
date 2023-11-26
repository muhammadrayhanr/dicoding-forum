/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

function Button({
  btnText, btnType, btnColor, btnClass, btnSize,
}) {
  return (
    <button
      type={btnType}
      className={`
        relative
        px-4
        py-1
        rounded-md
        shadow-sm
        ${btnSize === 'sm' ? 'text-xs' : ''}
        ${btnSize === 'md' ? 'text-base' : ''}
        text-xs
        font-medium
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        text-white
        border
        border-transparent
        focus:ring-${btnColor}-500
        bg-${btnColor}-600
        dark:bg-${btnColor}-900
        hover:bg-${btnColor}-500
        dark:hover:bg-${btnColor}-800
        ${btnClass}
      `}
    >
      {btnText}
    </button>
  );
}

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
  btnType: PropTypes.string,
  btnColor: PropTypes.string,
  btnSize: PropTypes.string,
  btnClass: PropTypes.string,
};

Button.defaultProps = {
  btnType: 'button',
  btnColor: 'indigo',
  btnSize: 'sm',
  btnClass: ' ',
};

export default Button;
