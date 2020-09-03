import React, { useState } from 'react';

import { Button, Select, Textarea } from '..';

import MultSelect from '../elements/MultipleSelect';

const options = {
    ok: true,
    data: [
        {
            label: 'Câncer',
            id: 1,
        },
        {
            label: 'Diabetes',
            id: 2,
        },
        {
            label: 'Obesidade',
            id: 3,
        },
        {
            label: 'Asma',
            id: 4,
        },
        {
            label: 'Outras',
            id: 5,
        },
    ],
};

const RegisterForm = () => {
    const [qPrincipal, setQPrincipal] = useState();
    const [doencas, setDoencas] = useState([]);
    const [historico, setHistorico] = useState();
    const [incomplete, setIncomplete] = useState(false);

    // eslint-disable-next-line consistent-return
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!qPrincipal || doencas.length === 0 || !historico)
            return setIncomplete(true);

        const data = {
            queixa: qPrincipal,
            doencas: doencas.map((item) => item.id),
            historico,
        };

        console.log(data);
    };

    return (
        <form className="register-form" onSubmit={handleSubmit}>
            <div className="title">Anamnese</div>
            <Select
                value={qPrincipal}
                label="Queixa principal"
                options={options.data}
                onChange={(e) => setQPrincipal(e.target.value)}
            />
            <MultSelect
                options={options.data}
                value={doencas}
                label="Doenças Adulto"
                onChange={(e) => setDoencas(e.target.value)}
            />
            <Textarea
                rows={4}
                label="Histórico da Moléstia"
                onChange={(e) => setHistorico(e.target.value)}
            />

            {incomplete ? (
                <h1>
                    O formulário está incompleto. Preencha os campos que faltam.
                </h1>
            ) : null}
            <Button type="submit" color="primary">
                Salvar
            </Button>
        </form>
    );
};

export default RegisterForm;
