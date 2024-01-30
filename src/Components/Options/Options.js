import React from 'react';
import './Options.css'

const Options = ({ option }) => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <div className='options-align'>
            <Checkbox
                label={option}
                value={checked}
                onChange={handleChange}
            />

        </div>
    );
};

const Checkbox = ({ label, value, onChange }) => {
    return (
        <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
        </label>
    );
};

export default Options;