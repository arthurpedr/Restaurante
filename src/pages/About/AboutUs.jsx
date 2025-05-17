import ButtonTop from '../Home/Componente/ScrolltopButtun.jsx';

function AboutUs() {
  return (
    <div className="w-full h-[125vh] md:h-full flex bg-[#1A1A1A] flex justify-center items-center"
    id="AboutUs">
      <div className="max-w-[1100px] h-[600px] flex flex-col justify-center items-center gap-12">
        <div className="flex mt-4 text-4xl text-[#C9A75D] font-semibold ">
          <p>About Us</p>
        </div>
        <div className="flex justify-center items-center gap-14 flex-wrap">
          <div className="w-[80%] md:w-[500px] overflow-hidden flex justify-center items-center">
            <img
              className="w-[500px] h-[70%] md:h-[400px] hover:scale-125 transition-all duration-300"
              src="/paris_six.webp"
              alt="Predio do Paris Six"
            />
          </div>
          <div className="w-[80%] md:w-[500px] text-[#F2F2F2] text-md md:text-xl font-medium">
            <p>
              Fundado em 2006, o Paris 6 nasceu da paixão pela cultura,
              gastronomia e pela atmosfera dos tradicionais cafés parisienses.
              Um lugar onde arte, sabor e história se encontram para criar
              experiências únicas e inesquecíveis. Nosso cardápio traz pratos
              clássicos da culinária francesa com um toque contemporâneo, em um
              ambiente sofisticado e acolhedor. Mais do que um restaurante,
              somos um espaço de celebração, inspiração e encontros memoráveis.
              Seja bem-vindo ao Paris 6 — onde cada detalhe é pensado para
              transformar momentos em grandes histórias.
            </p>
          </div>
          <ButtonTop />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
