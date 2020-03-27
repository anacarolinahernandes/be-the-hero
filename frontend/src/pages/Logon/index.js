import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'; // FI = Feather icons
import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogon(e) {
        e.preventDefault();
        
        try {
            const response = await api.post('sessions', { id });

            localStorage.setItem('ongId', id); // Para salvar os dados no local storage
            localStorage.setItem('ongName', response.data.name); // Para salvar os dados no local storage
            
            history.push('/profile');
        } catch (err) {
            alert('Falha ao logar. Tente novamente.');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logotipo Be The Hero" />
                <form onSubmit={handleLogon}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Imagem de heróis" />
        </div>
    );
}