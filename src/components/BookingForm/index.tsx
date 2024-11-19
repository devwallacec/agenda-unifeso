import { useContext, useState } from "react";
import { Context } from "../../contexts/ListingContext";

export const BookingForm = () => {
  const { addListing } = useContext(Context);

  const [formData, setFormData] = useState({
    cidade: "",
    data: "",
    horario: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { cidade, data, horario } = formData;

    // Validações
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

    addListing({ city: cidade, date: data, time: horario });
    
    setFormData({ cidade: "", data: "", horario: "" })
    // Popup de sucesso
    alert("Agendamento realizado com sucesso! Foi enviado um email de confirmação para você.");
  };

  return (
    <div className="bg-primary text-white flex flex-col w-full md:w-2/5 rounded-3xl items-center justify-center px-4 py-8">
      <h1 className="font-sans text-3xl uppercase">Agendamento</h1>
      <form className="flex flex-col w-full p-4 gap-y-3" onSubmit={handleSubmit}>
        <label
          className="uppercase text-xl font-bold font-secondary"
          htmlFor="cidade"
        >
          Cidade do Agendamento
        </label>
        <select
          name="cidade"
          id="cidade"
          className="p-2 rounded-xl text-black py-4 w-full"
          value={formData.cidade}
          onChange={handleInputChange}
        >
          <option value="vazio" className="text-neutral-500">
            --- SELECIONE UMA CIDADE ---
          </option>
          <option value="Magé">Magé</option>
          <option value="Teresópolis">Teresópolis</option>
          <option value="Niterói">Niterói</option>
          <option value="Duque de Caxias">Duque de Caxias</option>
          <option value="Petrópolis">Petrópolis</option>
        </select>

        <label
          className="uppercase text-xl font-bold font-secondary"
          htmlFor="data"
        >
          Selecione a Data
        </label>
        <input
          type="date"
          className="p-2 rounded-xl text-black py-4 w-full"
          name="data"
          id="data"
          value={formData.data}
          onChange={handleInputChange}
        />

        <label
          className="uppercase text-xl font-bold font-secondary"
          htmlFor="horario"
        >
          Selecione o Horário
        </label>
        <input
          type="time"
          className="p-2 rounded-xl text-black py-4 w-full"
          name="horario"
          id="horario"
          value={formData.horario}
          onChange={handleInputChange}
        />

        <div className="flex gap-x-2 mt-6">
          <button
            type="button"
            className="bg-red-500 hover:bg-red-700 hover:transition-all text-white px-2 py-4 rounded-md w-1/2 self-end"
            onClick={() => setFormData({ cidade: "", data: "", horario: "" })}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 hover:transition-all text-white px-2 py-4 rounded-md w-1/2 self-end"
          >
            Agendar
          </button>
        </div>
      </form>
    </div>
  );
};
