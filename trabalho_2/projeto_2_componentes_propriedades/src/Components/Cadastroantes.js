
/*import { useState } from 'react';
function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState('');
    const [user, setUser] = useState({});
    function handleRegistro(e) {
        e.preventDefault();
        setUser({
                nome: nome,
                idade: idade,
            email: email,
        })
    }
    return (
        <div>
            <form onSubmit={handleRegistro}>
                <label>Nome: </label><br />
                <input placeholder='Digite seu Nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                /><br />
                <label>Email: </label><br />
                <input placeholder='Digite seu Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br />
                <label>Idade: </label><br />
                <input placeholder='Digite sua Idade'
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                /><br />
                <button type='submit'>Registro</button>
            </form>
            <br /><br />
            <div>
                <span>Bem vindo, {user.nome}</span><br />
                <span>Idade: {user.idade}</span><br />
                <span>Email: {user.email}</span><br />
            </div>
        </div>
    );
}
export default Cadastro;*/