import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const Btn = ({ color, children }) => {
    return (
        <Button className={`button ${color}`}>
            <span>{children}</span>
        </Button>
    );
};

Btn.propTypes = {
    color: PropTypes.string,
    children: PropTypes.node,
};

Btn.defaultProps = {
    color: '',
    children: null,
};

export default Btn;
