import {  useRef } from 'react'
import { Link } from 'react-router-dom'
import { useUsuarioLogado } from '../../shared/hooks'


export const Dashboard = () => {
    const counterRef = useRef({counter: 0})

    const {nomeDoUsuario, logout} = useUsuarioLogado()

    return (
        <div>
            <h1>Hello World!!!</h1>
            <h1>{nomeDoUsuario}</h1>
            <p>Contador: {counterRef.current.counter}</p>
            <button onClick={() => counterRef.current.counter++}>Somar</button>
            <button onClick={() => console.log(counterRef.current.counter++)}>Log</button>
            <button onClick={logout}>Logout</button>
            <Link to="/entrar">Login</Link>
        </div>
    )
}