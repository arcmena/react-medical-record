import React from 'react';
import { Card, CardContent, Chip } from '@material-ui/core';
import PropTypes from 'prop-types';

import { Timer } from '../../assets/icons';

import './Record.scss';

const Record = ({ info }) => {
    return (
        <div className="prontuario">
            <div className="date">24 AGO 2020</div>
            <Card className="card">
                <div className="card-header">
                    <div className="header time">
                        <Timer />
                        18:41
                    </div>
                    <div className="header title">Anamnese</div>
                </div>
                <CardContent>
                    <span>Queixa principal</span>
                    <p>Vomito</p>
                    <span>Doenças Adulto</span>
                    <div>
                        <Chip label="Diabetes" className="chips" />
                        <Chip label="Cancer" className="chips" />
                    </div>
                    <span>Historico de Molestia</span>
                    <p>Fortes dores de cabeca ha uma semana</p>
                </CardContent>
            </Card>
        </div>
    );
};

Record.propTypes = {
    info: PropTypes.objectOf(
        PropTypes.shape({
            historico: PropTypes.string,
            queixa: PropTypes.objectOf(
                PropTypes.shape({
                    label: PropTypes.string,
                    id: PropTypes.number,
                }),
            ),
            doencas: PropTypes.arrayOf(
                PropTypes.shape({
                    label: PropTypes.string,
                    id: PropTypes.number,
                }),
            ),
            created_at: PropTypes.string,
            _id: PropTypes.string,
        }),
    ),
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
