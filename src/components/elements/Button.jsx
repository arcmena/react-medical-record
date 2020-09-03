import React, { ReactNode } from 'react';
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
    children: ReactNode,
};

Btn.defaultProps = {
    color: '',
    children: React.createElement('span'),
};

export default Btn;
