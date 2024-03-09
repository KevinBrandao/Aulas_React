import React, { useEffect, useState } from 'react';

const Exercicio = () => {
    const [input, setInput] = useState('');
    const [tarefas, setTarefas] = useState(() => {
        const tarefasStorage = localStorage.getItem('@tarefa');
        return tarefasStorage ? JSON.parse(tarefasStorage) : ["Tarefa-A","Tarefa-B","Tarefa-C"];
    });
    const [nome, setNome] = useState('');
    const [cor, setCor] = useState('');

    useEffect(() => {
        localStorage.setItem('@tarefa', JSON.stringify(tarefas));
    }, [tarefas]);

    useEffect(() => {
        const nomeSalvo = localStorage.getItem('nome');
        if (!nomeSalvo) {
            const nomeUsuario = prompt('Por favor, digite seu nome:');
            setNome(nomeUsuario);
            localStorage.setItem('nome', nomeUsuario);
        } else {
            setNome(nomeSalvo);
        }
    }, []);

    useEffect(() => {
        document.body.style.backgroundColor = cor;
    }, [cor]);

    function handleRegistro(e) {
        e.preventDefault();
        setTarefas([...tarefas, input]);
        setInput('');
    }

    return (
        <div>
            <h1>{nome}, sua lista de tarefas</h1>
            <p>Escolha uma cor de fundo:</p>
            <label>
                Vermelho
                <input
                    type="radio"
                    name="cor"
                    value="red"
                    checked={cor === 'red'}
                    onChange={() => setCor('red')}
                />
            </label>
            <label>
                Verde
                <input
                    type="radio"
                    name="cor"
                    value="green"
                    checked={cor === 'green'}
                    onChange={() => setCor('green')}
                />
            </label>
            <label>
                Azul
                <input
                    type="radio"
                    name="cor"
                    value="blue"
                    checked={cor === 'blue'}
                    onChange={() => setCor('blue')}
                />
            </label>
            <h2>Cadastro de Tarefas</h2>
            <form onSubmit={handleRegistro}>
                <label>Nome da tarefa: </label><br />
                <input placeholder='Digite uma tarefa'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                /><br />
                <button type='submit'>Registro</button>
            </form>
            <br /><br />
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ul>
        </div>
    );
};

export default Exercicio;
