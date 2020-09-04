import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Button, Record } from '../components';

import { RecordContext } from '../config/contexts/RecordContext';

import './Home.scss';

const Home = () => {
    const { records } = useContext(RecordContext);

    return (
        <>
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
        </>
    );
};

export default Home;
