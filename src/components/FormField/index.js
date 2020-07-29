import React from 'react';

function FormFieldArea({ label, type, name, value, onChange}) {
    return(
        <div>

            <label>
                {label}
                <input
                    type={type}
                    value= {value}
                    name={name}
                    onChange={onChange}
                />
            </label>

        </div>
    )
}

export default FormFieldArea;