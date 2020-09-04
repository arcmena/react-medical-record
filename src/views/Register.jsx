import React from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

import { mainVariants } from '../assets/utils/animations';
import { KeyboardBackspace } from '../assets/icons';
import { RegisterForm } from '../components';

const Register = () => {
    const history = useHistory();
    return (
        <motion.fraction
            initial="out"
            animate="in"
            exit="out"
            variants={mainVariants}
            className="fraction"
        >
            <div className="back-icon">
                <KeyboardBackspace onClick={() => history.goBack()} />
            </div>
            <RegisterForm />
        </motion.fraction>
    );
};

export default Register;
