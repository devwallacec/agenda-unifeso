import {createContext, useState} from 'react';

// Interface para definir a tipagem do contexto
interface IAuthContext{
  loggedIn: boolean;
  setLoggedIn: Function;
  userName: string;
  setUserName: Function;
  password: string;
  setPassword: Function;
}

// Declaração da interface para tipagem das propriedades.
interface IAuthProps{
  children: React.ReactNode;
}

// Criação do contexto com os estados e funções de alteração
export const Context = createContext({} as IAuthContext);

// Componente que irá prover o contexto para a aplicação
export const AuthContext = ({children}: IAuthProps) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return(
    <Context.Provider value={{loggedIn, setLoggedIn, userName, setUserName, password, setPassword}}>
      {children}
    </Context.Provider>
  );
}