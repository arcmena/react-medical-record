import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';

const Select = ({ label, value, onChange, options }) => {
    return (
        <>
            <TextField
                variant="outlined"
                select
                value={value}
                onChange={onChange}
                label={label}
                className="select"
            >
                {options.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </>
    );
};

Select.propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
            }),
        ),
    ]),
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            label: PropTypes.string,
        }),
    ),
};

Select.defaultProps = {
    label: '',
    value: undefined,
    options: [{ id: 1, label: 'Example' }],
};

export default Select;
