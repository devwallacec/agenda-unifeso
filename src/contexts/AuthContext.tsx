import {createContext, useState} from 'react';

interface IAuthContext{
  loggedIn: boolean;
  setLoggedIn: Function;
  userName: string;
  setUserName: Function;
  password: string;
  setPassword: Function;
}

interface IAuthProps{
  children: React.ReactNode;
}

export const Context = createContext({} as IAuthContext);

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