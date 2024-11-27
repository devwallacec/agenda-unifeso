import { useContext, useState } from "react";
import { Context } from "../../contexts/ListingContext";
import { Button } from "../Button";

// Componente de formulário de agendamento
export const BookingForm = () => {
  const { addListing } = useContext(Context);

  // Declaração do estado do formulário e das funções de manipulação
  const [formData, setFormData] = useState({
    cidade: "",
    data: "",
    horario: "",
    tipo: -1,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { cidade, data, horario, tipo } = formData;

    // Validações

    if (tipo <= -1) {
      alert("Por favor, selecione o tipo do agendamento.");
      return;
    }

    if (!cidade || cidade === "vazio") {
      alert("Por favor, selecione uma cidade.");
      return;
    }

    if (!data) {
      alert("Por favor, selecione uma data.");
      return;
    }

    if (!horario) {
      alert("Por favor, selecione um horário.");
      return;
    }

    addListing({ city: cidade, date: data, time: horario, type: tipo });

    setFormData({ cidade: "", data: "", horario: "", tipo: -1 });
    // Popup de sucesso
    alert("Agendamento realizado com sucesso! Foi enviado um email de confirmação para você.");
  };

  // Estruturação visual do formulário
  return (
    <div className="bg-primary text-white flex flex-col w-full md:w-2/5 rounded-3xl items-center justify-center px-4 py-8">
      <h1 className="font-sans text-3xl uppercase">Agendamento</h1>
      <form className="flex flex-col w-full p-4 gap-y-3" onSubmit={handleSubmit}>
        <label className="uppercase text-xl font-bold font-secondary" htmlFor="aTipo">
          Agendamento
        </label>
        <select name="tipo" id="tipo" className="p-2 rounded-xl text-black py-4 w-full" value={formData.tipo} onChange={handleInputChange}>
          <option value="-1" className="text-neutral-500" selected>
            --- TIPO DO AGENDAMENTO ---
          </option>
          <option value="0">Consultar meu imposto de renda</option>
          <option value="1">Consultar minha restituição</option>
          <option value="2">Emitir DARF para pagar o imposto</option>
          <option value="3">Entregar documentos de malha fiscal</option>
          <option value="4">Retificar notificação de lançamento </option>
          <option value="5">Impugnar notificação de lançamento</option>
          <option value="6">Declarar imposto de renda</option>
        </select>

        <label className="uppercase text-xl font-bold font-secondary" htmlFor="cidade">
          Cidade do Agendamento
        </label>
        <select name="cidade" id="cidade" className="p-2 rounded-xl text-black py-4 w-full" value={formData.cidade} onChange={handleInputChange}>
          <option value="vazio" className="text-neutral-500">
            --- SELECIONE UMA CIDADE ---
          </option>
          <option value="Magé">Magé</option>
          <option value="Teresópolis">Teresópolis</option>
          <option value="Niterói">Niterói</option>
          <option value="Duque de Caxias">Duque de Caxias</option>
          <option value="Petrópolis">Petrópolis</option>
        </select>

        <label className="uppercase text-xl font-bold font-secondary" htmlFor="data">
          Selecione a Data
        </label>
        <input type="date" className="p-2 rounded-xl text-black py-4 w-full" name="data" id="data" value={formData.data} onChange={handleInputChange} />

        <label className="uppercase text-xl font-bold font-secondary" htmlFor="horario">
          Selecione o Horário
        </label>
        <input type="time" className="p-2 rounded-xl text-black py-4 w-full" name="horario" id="horario" value={formData.horario} onChange={handleInputChange} />

        <div className="flex gap-x-2 mt-6">
          <Button type="reset" style="alternate" onClick={() => setFormData({ cidade: "", data: "", horario: "", tipo: 0 })}>
            Cancelar
          </Button>
          <Button type="submit">
            Agendar
          </Button>
        </div>
      </form>
    </div>
  );
};
