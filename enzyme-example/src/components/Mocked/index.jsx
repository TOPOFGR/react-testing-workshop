import React from 'react';
import PropTypes from 'prop-types';

const Mocked = ({ onSubmit }) => {

    console.log('API call');

    const onSubmitHandler = (e) => {
        e.preventDefault();
    
        onSubmit();
    };

    return (
        <div>
            Mocked component

            <form onSubmit={onSubmitHandler}>
                <input type="text" />
            <button>Save</button>
            </form>
        </div>
    );
};

Mocked.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Mocked;
