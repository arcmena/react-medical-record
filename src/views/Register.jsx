import React from 'react';
import { useHistory } from 'react-router-dom';

import { KeyboardBackspace } from '../assets/icons';
import { RegisterForm } from '../components';

const Register = () => {
    const history = useHistory();
    return (
        <>
            <div className="back-icon">
                <KeyboardBackspace onClick={() => history.goBack()} />
            </div>
            <RegisterForm />
        </>
    );
};

export default Register;
