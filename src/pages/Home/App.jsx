import Header from "../Header/Header.jsx";
import Principal from "../Principal/Principal.jsx";
import AboutUs from "../About/AboutUs.jsx";
import Menu from "../Menu/Menu.jsx";
import Reservation from "../Reserva/Reservation.jsx";
import Location from "../Location/Location.jsx";
import Footer from "../Footer/Footer.jsx";

function App() {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <Principal />
      <AboutUs />
      <Menu />
      <Reservation />
      <Location />
      <Footer />
    </div>
  );
}
export default App;
