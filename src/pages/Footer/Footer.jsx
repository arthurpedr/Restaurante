function Footer() {
  const categorias = {
    Menu: [
      { nome: "Breakfast menu" },
      { nome: "Lunch menu" },
      { nome: "Dessert menu" },
      { nome: "Drinks menu" },
    ],
    Resources: [
      { nome: "About us" },
      { nome: "FAQ" },
      { nome: "Contact Us" },
      { nome: "Locations" },
      { nome: "Privacy policy" },
    ],
    Bistro: [
      { nome: "2 Lord Edward St," },
      { nome: "Temple Bar," },
      { nome: "D02 P634," },
      { nome: "US" },
    ],
  };

  return (
    <footer
      className="w-full h-[100%] lg:h-[600px] bg-[#D6A159] flex flex-col justify-center items-center"
      id="Contact"
    >
      <div className="w-full xl:w-[1100px] h-[900px] lg:h-[450px] flex justify-center xl:justify-between items-center flex-wrap">

        <div className="flex w-[250px] h-[220px] flex-col text-black gap-4 mb-20 sm:mb-0">
          <p className="text-4xl font-semibold">Paris Six</p>
          {categorias["Bistro"].map((item, index) => (
            <p id="Footer" key={index}>
              {item.nome}
            </p>
          ))}
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xl font-semibold">Follow us</p>
            </div>
            <div className="flex gap-2">
              <img src="/facebook.svg" alt="facebook" />
              <img src="/instagram.svg" alt="instagram" />
              <img src="/whatsapp.svg" alt="whatsapp" />
            </div>
          </div>
        </div>

        <div className="flex w-[250px] h-[220px] flex-col text-black gap-4">
          <p className="text-4xl font-semibold">Menu</p>
          {categorias["Menu"].map((item, index) => (
            <p id="Footer" key={index}>
              {item.nome}
            </p>
          ))}
        </div>

        <div className="flex w-[250px] h-[220px] flex-col text-black gap-2">
          <p className="text-4xl font-semibold">Resources</p>
          {categorias["Resources"].map((item, index) => (
            <p id="Footer" key={index}>
              {item.nome}
            </p>
          ))}
        </div>
      </div>
      <div className="flex w-full h-[150px] flex justify-center items-center">
        <p className="text-lg font-semibold">
          &copy; 2025 Pedro Arthur. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
