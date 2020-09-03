import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const Btn = ({ color, type, children }) => {
    return (
        <Button type={type} className={`button ${color}`}>
            <span>{children}</span>
        </Button>
    );
};

Btn.propTypes = {
    color: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.node,
};

Btn.defaultProps = {
    color: '',
    type: 'button',
    children: null,
};

export default Btn;
