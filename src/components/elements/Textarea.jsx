import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

const Textarea = ({ label, rows, placeholder }) => {
    return (
        <TextField
            label={label}
            multiline
            rows={rows}
            variant="outlined"
            placeholder={placeholder}
        />
    );
};

Textarea.propTypes = {
    label: PropTypes.string,
    rows: PropTypes.number,
    placeholder: PropTypes.string,
};

Textarea.defaultProps = {
    label: 'Textarea',
    rows: 1,
    placeholder: '',
};

export default Textarea;
