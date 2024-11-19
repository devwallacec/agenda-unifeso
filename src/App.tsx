import { Header, InfoButton, Navigation, Sidebar } from "./components";
import { BrowserRouter, Route, Routes, useLocation, } from "react-router-dom";
import { HomePage } from "./pages/home/index.tsx";
import { BookingPage } from "./pages/booking/index.tsx";
import { SignupPage } from "./pages/signup/index.tsx";
import { ListingPage } from "./pages/listing/index.tsx";
import { IoInformationCircleOutline } from "react-icons/io5";
import clsx from "clsx";
import { FeedbackPage } from "./pages/feedback/index.tsx";

function AppContent() {
  const location = useLocation();

  return (
    <main className="flex flex-col w-full h-screen bg-neutral-300">
      <Header />
      <Navigation />
      <Sidebar />
      <section className="flex flex-col h-full w-full overflow-y-auto">
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/bookings" element={<BookingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/list" element={<ListingPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>
        <InfoButton
          text="Todas as operações realizadas neste site (login, cadastro e agendamento) são simuladas afim de representarem um fluxo real de utilização porém sem persistência de dados!"
          className="absolute bottom-2 left-2"
          size={32}
          title="Aviso"
          icon={<IoInformationCircleOutline size={20} className="mr-2" />}
        />
      </section>
      <img
        src="public\images\details.png"
        alt=""
        className={clsx(
          { "hidden md:hidden": location.pathname === "/list" },
          "w-1/6 transform -scale-x-100 absolute bottom-0 right-4 hidden md:block"
        )}
      />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
