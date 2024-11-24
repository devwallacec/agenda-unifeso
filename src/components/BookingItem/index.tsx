import { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { Context } from "../../contexts/ListingContext";

interface IBooking {
  city: string;
  date: string; // date deve estar no formato ISO (yyyy-mm-dd) recebido via formulário
  time: string;
}

export const BookingItem = ({ city, date, time }: IBooking) => {
  const {removeListing} = useContext(Context)

  // Função para formatar a data no formato dd/mm/aaaa
  const formatDate = (isoDate: string) => {
    const parsedDate = new Date(isoDate);
    const day = String(parsedDate.getDate()).padStart(2, "0");
    const month = String(parsedDate.getMonth() + 1).padStart(2, "0"); // Meses começam do zero
    const year = parsedDate.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Função para remover um agendamento
  const handleRemove = (listing: IBooking) => {
    const confirmation = confirm(`Tem certeza que deseja remover o agendamento ${city + " - " + time + " - " + date }?`);
    if (confirmation){
      removeListing(listing);
    }
  }

  // Componente que renderiza um agendamento
  return (
    <tr className="border-y hover:bg-neutral-200 cursor-pointer">
      <td className="py-3 px-1 w-6/12 whitespace-nowrap">{city}</td>
      <td className="py-3 px-1 w-2/12 whitespace-nowrap">{formatDate(date)}</td>
      <td className="py-3 px-1 w-2/12 whitespace-nowrap">{time} h</td>
      <td className="py-3 px-1 whitespace-nowrap w-full flex items-center justify-center" title="Cancelar esse agendamento?">
        <FaRegTrashAlt size={20} color="#aa0000" onClick={() => handleRemove({city, date, time})} />
      </td>
    </tr>
  );
};
