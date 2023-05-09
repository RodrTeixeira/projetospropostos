import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react"
import { UsuarioLogadoContext } from "../../shared/contexts"
import { ButtonLogin } from "./components/ButtonLogin"
import { InputLogin } from "./components/InputLogin"

export const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null)

    const {nomeDoUsuario} = useContext(UsuarioLogadoContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailLenght = useMemo(() => {
        console.log('Executou')
        return email.length * 1000
    },[email.length])

    useEffect(() => {
        if (window.confirm('Você é Homem?')) {
            console.log('Homem')
        } else {
            console.log('Mulher')
        }
    }, [])

    useEffect(() => {
        console.log(email)
    }, [email])

    useEffect(() => {
        console.log(password)
    }, [password])

    const handleEntrar = useCallback(() => {
        console.log(email)
        console.log(password)    
    }, [email, password])

    return (
        <div>
           <form>

            <p>Quantidade de caracteres no e-mail: {emailLenght}</p>
            <p>{nomeDoUsuario}</p>

            <InputLogin 
                label="Email"
                value={email}
                onChange={newValue => setEmail(newValue)}
                onPressEnter={() => inputPasswordRef.current?.focus()}
            />

            <InputLogin 
                label="Senha"
                type='password'
                value={password}
                ref={inputPasswordRef}
                onChange={newValue => setPassword(newValue)} 
            />

            <ButtonLogin type="button" onClick={handleEntrar}>
                Entrar
            </ButtonLogin>

            {/* <ButtonLogin type="button" onClick={handleEntrar}>
                Cadastrar-se
            </ButtonLogin> */}

           </form>
        </div>
    )
}