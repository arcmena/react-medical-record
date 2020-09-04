import React, { useState, useEffect } from 'react';
import { Card, CardContent, Chip } from '@material-ui/core';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/pt-br';

import { Timer } from '../../assets/icons';

import './Record.scss';

const date = (date) => {
    const data = moment(date)
        .locale('pt-br')
        .format('D MMM YYYY')
        .toUpperCase();
    const hora = moment(date).format('HH:mm');
    return { data, hora };
};

const Record = ({ info }) => {
    const [hora, setHora] = useState();
    const [data, setData] = useState();

    useEffect(() => {
        const baseDate = info.created_at;
        setData(date(baseDate).data);
        setHora(date(baseDate).hora);
    }, []);

    return (
        <div className="prontuario">
            <div className="date">{data}</div>
            <Card className="card">
                <div className="card-header">
                    <div className="header time">
                        <Timer />
                        {hora}
                    </div>
                    <div className="header title">Anamnese</div>
                </div>
                <CardContent className="card-content">
                    <span>Queixa principal</span>
                    <p>{info.queixa.label}</p>
                    <span>Doenças Adulto</span>
                    <div>
                        {info.doencas.map((item) => (
                            <Chip
                                label={item.label}
                                key={item.id}
                                className="chips"
                            />
                        ))}
                    </div>
                    <span>Histórico da Moléstia</span>
                    <p>{info.historico}</p>
                </CardContent>
            </Card>
        </div>
    );
};

Record.propTypes = {
    info: PropTypes.shape({
        historico: PropTypes.string,
        queixa: PropTypes.shape({
            label: PropTypes.string,
            id: PropTypes.number,
        }),
        doencas: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string,
                id: PropTypes.number,
            }),
        ),
        created_at: PropTypes.string,
        _id: PropTypes.string,
    }),
};

Record.defaultProps = {
    info: {
        historico: 'Boiler text',
        queixa: { label: 'Vômito', id: 1 },
        doencas: [{ label: 'Diabetes', id: 1 }],
        created_at: '2020-09-03T22:30:49.789Z',
        _id: 'WYUr2dn2XD0ssd2YWjQ',
    },
};

export default Record;
