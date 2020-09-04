import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const RecordContext = createContext();

const RecordProvider = ({ children }) => {
    const [records, setRecords] = useState([]);

    const providerValue = {
        records,
        setRecords,
    };
    return (
        <RecordContext.Provider value={providerValue}>
            {children}
        </RecordContext.Provider>
    );
};

RecordProvider.propTypes = {
    children: PropTypes.node,
};

RecordProvider.defaultProps = {
    children: null,
};

export default RecordProvider;
