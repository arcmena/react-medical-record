import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const Btn = ({ children }) => {
    return (
        <Button>
            <span>{children}</span>
        </Button>
    );
};

Btn.propTypes = {
    children: PropTypes.node,
};

Btn.defaultProps = {
    children: PropTypes.node,
};

export default Btn;
