import InputField from '../Home/Componente/InputAnimation.jsx';

function Reservation() {
  return (
    <div className="w-full h-[110vh] bg-[#1A1A1A] flex justify-center items-center" id="Reservation">
  <div className="w-[80%] md:w-[1100px] h-[700px] flex flex-col justify-center items-center overflow-hidden">
    <div className="text-4xl text-[#C9A75D] font-semibold mb-8">
      <p>Reservation</p>
    </div>
    <div className="w-[80%] md:w-[1100px] h-[700px] flex justify-center items-center flex-wrap">
      {/* Imagem */}
      <div className="w-full max-w-[500px] flex justify-center items-center">
        <img className="w-full h-auto md:h-[350px] rounded-[10px]" src="/publi.webp" alt="page de reserva" />
      </div>

      {/* Formulário */}
      <div className="w-full max-w-[500px] flex flex-col justify-center gap-8 items-center">
        <p className="text-[#F2F2F2] text-3xl font-semibold text-center">
          Book your table
        </p>
        <form action="#" className="flex flex-col gap-4 w-full items-center">
          <InputField id="nome" label="Name" placeholder="text" />
          <InputField id="telefone" label="Telephone" placeholder="tel" />
          <InputField id="email" label="E-mail" placeholder="email" />
          <InputField id="time" label="Time" placeholder="time" />
          <InputField id="date" label="Date" placeholder="date" />
          <InputField id="number" label="Number of people" placeholder="number" />
          <button className="w-[120px] h-[40px] rounded-[25px] text-black font-semibold bg-[#F2F2F2] hover:bg-transparent border-2 border-transparent cursor-pointer hover:border-white hover:text-white transition-all duration-300" type="submit">
            Book table
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

  );
}

export default Reservation;
