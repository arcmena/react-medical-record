import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Select, Textarea, MultiSelect, Backdrop } from '..';

import api from '../../services/api';

const serverError =
    'Houve algum problema com o servidor e não conseguimos carregar certos dados.';

const RegisterForm = () => {
    const [doencas, setDoencas] = useState([]);
    const [queixas, setQueixas] = useState([]);

    const [formQueixas, setFormQueixas] = useState();
    const [formDoencas, setFormDoencas] = useState([]);
    const [historico, setHistorico] = useState();

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [open, setOpen] = useState(false);

    const history = useHistory();

    useEffect(() => {
        api.get('/doencas')
            .then(({ data }) => setDoencas(data.data))
            .catch(() => {
                setError(true);
                setErrorMessage(serverError);
            });

        api.get('/queixas')
            .then(({ data }) => setQueixas(data.data))
            .catch(() => {
                setError(true);
                setErrorMessage(serverError);
            });
    }, []);

    // eslint-disable-next-line consistent-return
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formQueixas || formDoencas.length === 0 || !historico) {
            setErrorMessage(
                'O formulário está incompleto. Preencha os campos que faltam.',
            );
            return setError(true);
        }

        if (historico.length < 10) {
            setErrorMessage(
                'O campo de histórico precisa ter mais de 10 caracteres',
            );
            return setError(true);
        }

        setOpen(true);

        const data = {
            queixa: formQueixas,
            doencas: formDoencas.map((item) => item.id),
            historico,
        };

        console.log(data);

        api.post('/prontuario', data)
            .then(({ data }) => {
                localStorage.prontuarios = [data];
                console.log(data);
            })
            .catch((error) => console.log(error));

        // setTimeout(() => {
        //     history.push('/');
        // }, 3000);
    };

    return (
        <form className="register-form" onSubmit={handleSubmit}>
            <Backdrop open={open} doneIcon>
                Prontuario criado!
            </Backdrop>
            <div className="title">Anamnese</div>
            <Select
                value={formQueixas}
                label="Queixa principal"
                options={queixas}
                onChange={(e) => setFormQueixas(e.target.value)}
            />
            <MultiSelect
                options={doencas}
                value={formDoencas}
                label="Doenças Adulto"
                onChange={(e) => setFormDoencas(e.target.value)}
            />
            <Textarea
                rows={4}
                label="Histórico da Moléstia"
                onChange={(e) => setHistorico(e.target.value)}
            />

            {error ? <h1>{errorMessage}</h1> : null}
            <Button type="submit" color="primary">
                Salvar
            </Button>
        </form>
    );
};

export default RegisterForm;
