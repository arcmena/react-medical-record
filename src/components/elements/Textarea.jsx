import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

const Textarea = ({ label, rows, placeholder, onChange }) => {
    return (
        <TextField
            variant="outlined"
            placeholder={placeholder}
            multiline
            rows={rows}
            label={label}
            defaultValue=""
            className="textarea"
            onChange={onChange}
        />
    );
};

Textarea.propTypes = {
    label: PropTypes.string,
    rows: PropTypes.number,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

Textarea.defaultProps = {
    label: 'Textarea',
    rows: 1,
    placeholder: '',
};

export default Textarea;
