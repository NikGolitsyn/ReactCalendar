import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ type, name, value, changeEventHandler, placeholder }) => (
  <>
    {placeholder ? (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="event-form__field"
        value={value}
        onChange={changeEventHandler}
      />
    ) : (
      <input
        type={type}
        name={name}
        className="event-form__field"
        value={value}
        onChange={changeEventHandler}
      />
    )}
  </>
);

export default InputField;

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  changeEventHandler: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

InputField.defaultProps = {
  placeholder: '',
};
