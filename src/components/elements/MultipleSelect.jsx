import React from 'react';
import { InputLabel, Select, Chip, MenuItem } from '@material-ui/core';
import PropTypes from 'prop-types';

const MultipleSelect = ({ options, label, onChange, value }) => {
    return (
        <>
            <InputLabel className="lbl">{label}</InputLabel>
            <Select
                className="select multiple"
                multiple
                value={value}
                onChange={onChange}
                variant="outlined"
                renderValue={(selected) => (
                    <div>
                        {selected.map((item) => (
                            <Chip
                                key={item.id}
                                label={item.label}
                                className="chips"
                            />
                        ))}
                    </div>
                )}
            >
                {options.map((item) => (
                    <MenuItem key={item.id} value={item}>
                        {item.label}
                    </MenuItem>
                ))}
            </Select>
        </>
    );
};

MultipleSelect.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            label: PropTypes.string,
        }),
    ),
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
        }),
    ),
};

MultipleSelect.defaultProps = {
    options: [],
    label: 'Multiple Select',
    value: [],
};

export default MultipleSelect;
