function Principal() {
  return (
    <div
      className="w-full h-screen flex items-center justify-center z-0"
      style={{
        backgroundImage: `url('/restaurante.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center bg-gradient-to-r from-transparent to-black">
          <div className="w-[300px] md:w-[500px] h-[300px] md:h-[500px] flex flex-col justify-center items-center text-center text-[#F2F2F2] text-5xl md:text-8xl font-bold text-center z-10 gap-6">
            <p className="">Paris Six</p>
            <button className="text-[16px]  md:text-xl w-[100px]  md:w-[150px] h-[35px] md:h-[50px] text-black bg-[#F2F2F2] hover:bg-transparent border-2 border-transparent hover:border-[#F2F2F2] hover:text-[#F2F2F2] transition-all duration-300 cursor-pointer" type="button">Confira</button>
          </div>
      </div>
    </div>
  );
}

export default Principal;
