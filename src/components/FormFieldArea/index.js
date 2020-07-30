import React from 'react';
import PropTypes from 'prop-types';

function FormFieldArea({ label, type, name, value, onChange}) {
    return(
        <div>

            <label>
                {label}
                <textarea
                    type={type}
                    value= {value}
                    name={name}
                    onChange={onChange}
                />
            </label>

        </div>
    )
}

FormFieldArea.defaultProps = {
    type: 'text',
    value: '',
    onChange: () => {}
  };
  
FormFieldArea.prototype = {
    label: PropTypes.string.isRequired, 
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default FormFieldArea;