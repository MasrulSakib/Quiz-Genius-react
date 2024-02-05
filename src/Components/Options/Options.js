import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Options.css';
import { QuizContext } from '../Questions/Questions';

const Options = ({ option }) => {
    const answer = useContext(QuizContext);
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
        if (!checked) {
            showNotification();
        }
    };

    const showNotification = () => {
        if (option === answer) {
            toast.success('Correct Answer!');
        } else {
            toast.error('Wrong Answer!');
        }
    };

    return (
        <div className='options-align'>
            <Checkbox
                label={option}
                value={checked}
                onChange={handleChange}
            />
            <ToastContainer></ToastContainer>
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
