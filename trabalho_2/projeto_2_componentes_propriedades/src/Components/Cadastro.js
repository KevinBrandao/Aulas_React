import { useEffect, useState } from 'react';

function Cadastro() {
    const [input, setInput] = useState('');
    const [tarefas, setTarefas] = useState([
        "a","b","c"
    ]);

    const tarefasStorage = localStorage.getItem('@tarefa');

    useEffect(() =>{

        if(tarefasStorage){
            setTarefas(JSON.parse(tarefasStorage));
        }

    }, []);

    useEffect(() =>{
        alert('Tarefa adicionada com sucesso',[]);
        localStorage.setItem('@tarefa', JSON.stringify(tarefas));
    }, [tarefas]);

   // useEffect(() =>{
     //   alert("Tarefa adicionada com sucesso")
    //}, [tarefas]);

    function handleRegistro(e) {
        e.preventDefault();

        setTarefas([...tarefas, input]);
        setInput('');
    }
    return (
        <div>
            <h1>Cadastro de Tarefas</h1>
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
                {tarefas.map( tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>

        </div>
    );
}
export default Cadastro;