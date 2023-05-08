import { createContext } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string
}
const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData)

interface IUsuarioLogadoProviderProps {
    children: React.ReactNode
}

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({ children }) => {
    return (
        <UsuarioLogadoContext.Provider value={{nomeDoUsuario: 'Lucas'}}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}