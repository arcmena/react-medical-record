import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../components';

import './Home.scss';

const Home = () => {
    const records = [];
    return (
        <>
            {records.length === 0 ? (
                <h1>Nenhum prontuário encontrado</h1>
            ) : (
                records.map((record) => <p>{record}</p>)
            )}
            <Link to="/register">
                <Button color="primary">Adicionar novo prontuário</Button>
            </Link>
        </>
    );
};

export default Home;
