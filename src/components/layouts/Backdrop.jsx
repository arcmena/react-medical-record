import React from 'react';
import PropTypes from 'prop-types';
import { Backdrop } from '@material-ui/core';

import { Done } from '../../assets/icons';

const BackdropComp = ({ open, doneIcon, children }) => {
    return (
        <Backdrop open={open} className="backdrop">
            {doneIcon && <Done style={{ fontSize: 50 }} />}
            {children}
        </Backdrop>
    );
};

BackdropComp.propTypes = {
    open: PropTypes.bool,
    doneIcon: PropTypes.bool,
    children: PropTypes.node,
};

BackdropComp.defaultProps = {
    open: false,
    doneIcon: false,
    children: null,
};

export default BackdropComp;
