import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';

const Select = ({ label, value, handleChange, options }) => {
    return (
        <TextField
            select
            label={label}
            value={value}
            onChange={handleChange}
            helperText="Selecione um"
            variant="outlined"
        >
            {options.map((option) => (
                <MenuItem key={option.value} value={option.id}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
};

Select.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            label: PropTypes.string,
        }),
    ),
};

Select.defaultProps = {
    label: 'Select',
    value: '',
    options: [],
};

export default Select;
