interface IBooking {
  city: string;
  date: string; // Presume-se que `date` esteja no formato ISO (yyyy-mm-dd)
  time: string;
}

export const BookingItem = ({ city, date, time }: IBooking) => {
  // Função para formatar a data no formato dd/mm/aaaa
  const formatDate = (isoDate: string) => {
    const parsedDate = new Date(isoDate);
    const day = String(parsedDate.getDate()).padStart(2, "0");
    const month = String(parsedDate.getMonth() + 1).padStart(2, "0"); // Meses começam do zero
    const year = parsedDate.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <tr className="border-y hover:bg-neutral-200 cursor-pointer">
      <td className="py-3">{city}</td>
      <td className="py-3">{formatDate(date)}</td>
      <td className="py-3">{time} h</td>
    </tr>
  );
};
