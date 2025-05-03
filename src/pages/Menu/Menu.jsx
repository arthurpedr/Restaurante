function Menu() {
    return (
      <div className="w-full h-[130vh] flex flex-col justify-center items-center bg-[#1A1A1A] px-4"
      id="Menu">
        <div className="text-4xl text-[#C9A75D] font-semibold mb-8">
          <p>Menu</p>
        </div>
  
        <div className="w-[80%] lg:w-[1100px] h-[80%] lg:h-[700px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <div className="lg:row-span-2 overflow-hidden">
            <img className="w-full h-full object-cover rounded-lg hover:scale-125 transition-all duration-300" src="/restaurante.jpg" alt="Restaurante" />
          </div>
          <div className="lg:row-span-2 overflow-hidden">
            <img className="w-full h-full object-cover rounded-lg hover:scale-125 transition-all duration-300" src="/restaurante.jpg" alt="Restaurante" />
          </div>
          <div className="overflow-hidden">
            <img className="w-full h-full object-cover rounded-lg hover:scale-125 transition-all duration-300" src="/restaurante.jpg" alt="Restaurante" />
          </div>
          <div className="overflow-hidden">
            <img className="w-full h-full object-cover rounded-lg hover:scale-125 transition-all duration-300 " src="/restaurante.jpg" alt="Restaurante" />
          </div>
          <div className="lg:col-span-2 lg:h-[237.34px] overflow-hidden">
            <img className="w-full h-full object-cover rounded-lg hover:scale-125 transition-all duration-300" src="/restaurante.jpg" alt="Restaurante" />
          </div>
          <div className="overflow-hidden">
            <img className="w-full h-full object-cover rounded-lg hover:scale-125 transition-all duration-300" src="/restaurante.jpg" alt="Restaurante" />
          </div>
        </div>
      </div>
    );
  }
  
  export default Menu;
  