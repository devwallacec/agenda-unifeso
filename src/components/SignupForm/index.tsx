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
  const { setUserName, setPassword } = useContext(Context); // Contexto para autenticação
  const navigate = useNavigate();

  // Estado do formulário
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Manipulador de mudança de campos
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Manipulador de envio do formulário
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Verifica se todos os campos estão preenchidos
    const emptyFields = Object.entries(formData).filter(([, value]) => value.trim() === "");
    if (emptyFields.length > 0) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Verifica se as senhas conferem
    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não conferem.");
      return;
    }

    // Configurações no contexto (opcional)
    setUserName(formData.username); // Definindo o usuário no contexto
    setPassword(formData.password); // Definindo a senha no contexto

    alert("Cadastro realizado com sucesso!");
    navigate("/signin");
  };

  // Função para limpar os campos
  const clearForm = () => {
    setFormData({ username: "", email: "", password: "", confirmPassword: "" });// Limpa mensagens de erro
  };

  return (
    <div className="bg-primary text-white flex flex-col w-full md:w-2/5 rounded-3xl items-center justify-center px-4 py-8">
      <h1 className="font-sans text-3xl uppercase">Crie sua Conta</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-full p-4 gap-y-3">
        <InputField
          label="Usuário"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Usuário"
        />
        <InputField
          label="E-Mail"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-Mail"
        />
        <InputField
          label="Senha"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Senha"
        />
        <InputField
          label="Confirmação de Senha"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirmação de Senha"
        />

        <div className="flex gap-x-2 mt-6">
          <Button type="button" onClick={clearForm} style="alternate">
            Limpar
          </Button>
          <Button type="submit" className="bg-rose-700 hover:bg-rose-600 hover:transition-all">
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
};
