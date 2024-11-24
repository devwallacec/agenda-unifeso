import { useContext, useState, ChangeEvent, FormEvent } from "react";
import { InputField, Button } from "../";
import { Context } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

// Definição da interface para o estado do formulário
interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignupForm = () => {
  const { setUserName, setPassword } = useContext(Context);
  const navigate = useNavigate();

  // Tipando o estado do formulário como FormData
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Tipando a função handleChange para eventos de ChangeEvent em inputs HTML
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Tipando handleSubmit para eventos de formulário
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não conferem");
      return;
    }
    setUserName(formData.username);
    setPassword(formData.password);
    alert("Cadastro realizado com sucesso!");
    navigate("/signin");
  };

  return (
    <div className="bg-primary text-white flex flex-col w-full md:w-2/5 rounded-3xl items-center justify-center px-4 py-8">
      <h1 className="font-sans text-3xl uppercase">Crie sua Conta</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-full p-4 gap-y-3">
        <InputField label="Usuário" type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Usuário" />
        <InputField label="E-Mail" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-Mail" />
        <InputField label="Senha" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Senha" />
        <InputField label="Confirmação de Senha" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirmação de Senha" />

        <div className="flex gap-x-2 mt-6">
          <Button label="Limpar" type="button" onClick={() => setFormData({ username: "", email: "", password: "", confirmPassword: "" })} className="bg-red-500 hover:bg-red-700 hover:transition-all" />
          <Button label="Enviar" type="submit" className="bg-green-600 hover:bg-green-700 hover:transition-all" onClick={() => {}} />
        </div>
      </form>
    </div>
  );
};
