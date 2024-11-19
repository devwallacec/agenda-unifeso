import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (rating === 0) {
      alert("Por favor, selecione uma nota antes de enviar o feedback.");
      return;
    }

    alert("Feedback enviado! Obrigado pelo seu tempo.");
    navigate("/list");
  };

  return (
    <div className="bg-primary text-white flex flex-col w-full md:w-2/5 rounded-3xl items-center justify-center px-4 py-8">
      <h1 className="font-sans text-3xl uppercase">Feedback</h1>
      <p className="text-center mb-4 pb-4 border-b border-neutral-500 w-8/12">Seu feedback é muito importante para nós!</p>
      <form className="flex flex-col w-full p-4 gap-y-3" onSubmit={(e) => handleSubmit(e)}>

        {/* Estrelas para avaliação */}
        <p className="text-center">Qual é sua nota para o nosso site?</p>
        <div className="flex justify-center gap-2 mb-4">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <FaStar
                key={index}
                size={30}
                className="cursor-pointer"
                color={starValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setRating(starValue)}
              />
            );
          })}
        </div>

        <textarea placeholder="Observações (Opcional)" className="p-2 rounded-xl text-black py-4" rows={8} />
        
        <div className="flex gap-x-2">
          <button type="submit" className="bg-green-600 hover:bg-green-500 hover:transition-all text-white px-2 py-4 rounded-md w-full self-end">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
