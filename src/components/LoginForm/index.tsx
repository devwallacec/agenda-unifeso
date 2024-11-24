import { useContext, useState } from "react";
import { Context } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


// Montagem e controle do componente de formulário de login
export const LoginForm = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const {userName, password, setLoggedIn} = useContext(Context);
  const navigate = useNavigate();
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (input1.trim() === '' || input2.trim() === '') {
      alert('Por gentileza informe o usuário e senha.');
    } else {
      if(input1 === userName && input2 === password){
        setLoggedIn(true);
        navigate("/bookings");
      }else{
        alert("Usuário ou senha incorretos, tente novamente.");
      }
    }
  };

  return (
    <div className="bg-primary text-white flex flex-col w-full md:w-2/5 rounded-3xl items-center justify-center px-4 py-8">
      <h1 className="font-sans text-3xl uppercase">Login</h1>
      <p className="text-center mb-4">Entre com seu usuário e senha para realizar seus agendamentos.</p>
      <form className="flex flex-col w-full p-4 gap-y-3" onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Usuário" className="p-2 rounded-xl text-black py-4" onInput={(e) => setInput1(e.currentTarget.value)} />
        <a href="#" className="uppercase text-xs font-bold text-right hover:text-sky-400" onClick={() => alert("Função não implementada na demo!")}>Esqueci meu usuário</a>
        <input type="password" placeholder="Senha" className="p-2 rounded-xl text-black py-4" onInput={(e) => setInput2(e.currentTarget.value)}/>
        <a href="#" className="uppercase text-xs font-bold text-right hover:text-sky-400" onClick={() => alert("Função não implementada na demo!")}>Esqueci minha senha</a>
        <div className="flex gap-x-2">
          <button type="button" onClick={() => {navigate("/signup")}} className="bg-sky-500 hover:bg-sky-600 hover:transition-all text-white px-2 py-4 rounded-md w-1/2 self-end">Cadastrar-se</button>
          <button type="submit" className="bg-blue-600 hover:bg-blue-500 hover:transition-all text-white px-2 py-4 rounded-md w-1/2 self-end">Entrar</button>
        </div>
      </form>
    </div>
  )
}