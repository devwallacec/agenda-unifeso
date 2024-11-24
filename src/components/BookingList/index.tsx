import { useContext } from "react";
import { BookingItem } from "../BookingItem";
import { Context } from "../../contexts/ListingContext";

export const BookingList = () => {
  const { listings } = useContext(Context);

  if (!listings || listings.length === 0) {
    return (
      <div className="flex w-full items-center justify-center p-8 text-lg">
        <p className="text-gray-500">Nenhum agendamento encontrado.</p>
      </div>
    );
  }

  // Ordenar os agendamentos por data e horário
  const sortedListings = [...listings].sort((b, a) => {
    const dateA = new Date(`${a.date}T${a.time}`);
    const dateB = new Date(`${b.date}T${b.time}`);
    return dateA.getTime() - dateB.getTime(); // Ordem ascendente (mais antigos primeiro)
  });

  // Componente que renderiza a lista de agendamentos
  return (
    <table className="table-auto w-full md:w-8/12">
      <thead className="text-left">
        <tr>
          <th className="">Cidade</th>
          <th className="whitespace-nowrap text-center">Data</th>
          <th className="whitespace-nowrap text-center">Horário</th>
          <th className="whitespace-nowrap text-center">Cancelar?</th>
        </tr>
      </thead>
      <tbody className="text-left">
        {sortedListings.map((booking, index) => (
          <BookingItem
            key={`${index}-${booking.city}-${booking.date}-${booking.time}`}
            city={booking.city}
            date={booking.date}
            time={booking.time}
          />
        ))}
      </tbody>
    </table>
  );
};
