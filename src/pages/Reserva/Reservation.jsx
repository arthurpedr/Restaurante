import InputField from '../Home/Componente/InputAnimation.jsx';

function Reservation() {
  return (
    <div className="w-full h-[110vh] xl:h-screen bg-[#1A1A1A] flex justify-center items-center"
    id='Reservation'>
      <div className="w-[1100px] h-[700px] flex flex-col justify-center items-center">
      <div className="text-4xl text-[#C9A75D] font-semibold mb-8">
        <p>Reservation</p>
      </div>
        <div className='flex flex-wrap justify-center items-center'>
            <div className="w-[70%] md:w-[500px] flex justify-center items-center">
              <img className='rounded-[10px]' src="/publi.jpg" alt="page de reserva" />
            </div>
            <div className="w-[500px] flex flex-col justify-center gap-8 items-center">
              <p className="text-[#F2F2F2] text-4xl font-semibold">
                Book your table
              </p>
              <form action="#" className='flex flex-col gap-4'>
                <InputField id="nome" label="Name" placeholder="text" />
                <InputField id="telefone" label="Telephone" placeholder="tel" />
                <InputField id="email" label="E-mail" placeholder="email" />
                <div className='flex gap-10'>
                    <input className='px-2 border-2 border-white text-white w-[130px] h-[40px] rounded-[10px]' type="time" />
                    <input className='px-2 border-2 border-white text-white w-[130px] h-[40px] rounded-[10px]' type="date" />
                </div>
                <InputField id="number" label="Number of people" placeholder="number" />
                <button className='w-[120px] h-[40px] rounded-[25px] text-black font-semibold bg-[#F2F2F2] hover:bg-transparent border-2 border-transparent cursor-pointer hover:border-white hover:text-white transition-all duration-300' type="submit">Book table</button>
              </form>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
