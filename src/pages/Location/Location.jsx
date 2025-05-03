function Location() {
  return (
    <div
      className="w-full h-screen bg-[#1A1A1A] flex justify-center items-center"
      id="Location"
    >
      <div className="w-[1100px] h-[600px] flex flex-col justify-center items-center">
        <div className="text-4xl text-[#C9A75D] font-semibold mb-8">
          <p>Location</p>
        </div>
        <div className="w-[90%] xl:w-[1100px] h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63574.005647288286!2d-37.3293056!3d-5.2035583999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1746208984688!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Location;
