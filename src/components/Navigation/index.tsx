import clsx from "clsx";
import { useContext } from "react";
import { FaCalendarAlt, FaHome, FaStar, FaUser, FaUsers } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../../contexts/AuthContext";

// Corrige o MenuLink para usar props corretamente e incluir location como prop
interface MenuLinkProps {
  url: string;
  icon: React.ReactNode;
  text: string;
  display?: boolean;
}

// Monta o componente MenuLink para ser usado no Navigation
export const MenuLink = ({ url, icon, text, display = true }: MenuLinkProps) => {
  const location = useLocation();

  return (
    <Link to={url} className={clsx({ "bg-neutral-400 rounded-md": location.pathname === url, hidden: !display }, "flex uppercase py-2 px-8 whitespace-nowrap items-center gap-x-2 font-bold text-sm font-secondary")}>
      {icon}
      {text}
    </Link>
  );
};

// Monta o componente Navigation para ser usado no App
export const Navigation = () => {
  const { loggedIn, userName, setLoggedIn } = useContext(Context);
  const navigate = useNavigate();

  const logout = () => {
    setLoggedIn(false);
    navigate("/");
  };

  // renderiza o componente Navigation
  return (
    <div className="bg-white hidden md:flex min-h-16 justify-end items-center px-10 gap-x-10 drop-shadow-md">
      <MenuLink url="/" icon={<FaHome size={20} />} text="Home" display={!loggedIn}/>
      <MenuLink url="/signin" icon={<FaUser  size={20} />} text="Entrar" display={!loggedIn} />
      <MenuLink url="/bookings" icon={<FaCalendarAlt size={17} />} text="AGENDAR" display={loggedIn} />
      <MenuLink url="/list" icon={<FaCalendarAlt size={17} />} text="LISTAR AGENDAMENTOS" display={loggedIn} />
      <MenuLink url="/signup" icon={<FaUsers size={20} />} text="cadastrar" display={!loggedIn} />
      <MenuLink url="/feedback" icon={<FaStar size={20} />} text="Avaliação e Feedback" display={loggedIn} />
      <div className={clsx({ hidden: !loggedIn })}>
        {userName ?? userName}
        <span className="ml-3">
          (
          <a href="#" onClick={() => logout()} className="hover:underline">
            Sair
          </a>
          )
        </span>
      </div>
    </div>
  );
};
