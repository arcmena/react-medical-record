import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { landingVariants } from '../assets/utils/animations';
import { Button, Record } from '../components';
import { RecordContext } from '../config/contexts/RecordContext';

import './Home.scss';

const Home = () => {
    const { records } = useContext(RecordContext);

    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={landingVariants}
            className="fraction"
        >
            <section>
                {records.length === 0 ? (
                    <h1>Nenhum prontuário encontrado</h1>
                ) : (
                    records.map((record) => (
                        <Record key={record.id} info={record} />
                    ))
                )}
            </section>
            <Link to="/register">
                <Button color="primary">Adicionar novo prontuário</Button>
            </Link>
        </motion.div>
    );
};

export default Home;
