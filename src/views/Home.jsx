import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { Button, Record } from '../components';

import { RecordContext } from '../config/contexts/RecordContext';

import './Home.scss';

const Home = () => {
    // const { records } = useContext(RecordContext);
    const records = [
        {
            historico: 'asdasdasd as dasdasd',
            queixa: { label: 'Vômito', id: 1 },
            doencas: [
                { label: 'Diabetes', id: 2 },
                { label: 'Asma', id: 4 },
            ],
            created_at: '2020-09-03T22:30:49.789Z',
            _id: 'WYUr2dn2XD0sYWjQ',
        },
    ];

    return (
        <>
            <section>
                {/* {records.length === 0 ? (
                    <h1>Nenhum prontuário encontrado</h1>
                ) : (
                    records.map((record) => <p>{JSON.stringify(record)}</p>)
                )} */}
                <Record />
                <Record />
                <Record />
                <Record />
            </section>
            <Link to="/register">
                <Button color="primary">Adicionar novo prontuário</Button>
            </Link>
        </>
    );
};

export default Home;
