// Cadastro.js
import React, { useState } from 'react';
import './Cadastro.css';

function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('');
    const [dadosRegistrados, setDadosRegistrados] = useState(null);

    const handleRegistro = (e) => {
        e.preventDefault();
        // Armazenar os dados registrados
        const dados = {
            nome: nome,
            email: email,
            idade: idade
        };
        setDadosRegistrados(dados);
        // Limpar os campos do formulário
        setNome('');
        setEmail('');
        setIdade('');
    };

    return (
        <header>
        <div>
            <h2>Cadastro de Usuário</h2>
            <form onSubmit={handleRegistro}>
                <label>
                    Nome:
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)} />
                </label><p></p>
                <label>
                    E-mail:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </label><p></p>
                <label>
                    Idade:
                    <input
                        type="number"
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)} />
                </label><p></p>
                <button type="submit">Registrar</button>
            </form>
            {dadosRegistrados && (
                <div>
                    <h2>Dados Registrados</h2>
                    <p>Nome: {dadosRegistrados.nome}</p>
                    <p>E-mail: {dadosRegistrados.email}</p>
                    <p>Idade: {dadosRegistrados.idade}</p>
                </div>
            )}
        </div>
        </header>
    );
}

export default Cadastro;