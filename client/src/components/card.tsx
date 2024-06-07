const Card = () => {
  return (
    <div className=" bg-white border rounded-lg shadow-md p-4 max-w-sm">
      <a href="">
        <div className="flex flex-col items-center mb-4">
          <img
            src="https://media.discordapp.net/attachments/1246201361977315400/1248691280226025603/casa.png?ex=666495e0&is=66634460&hm=7b7dcc815a137208ceb0d14abe22dc3334299f500a7be039be25b5f826dd990f&=&format=webp&quality=lossless"
            alt="Product Image"
            className="w-full h-auto rounded-md"
          />
          <h2 className="text-xl text-black font-bold mt-2 mb-2">
            Congreso 1920
          </h2>
        </div>
        <div className="text-start">
          <span className="text-green-500 text-lg font-semibold">$47,054</span>
          <p className=" text-gray-600 mb-2">
            Cerca del centro y a cuadras del parque natural.
          </p>
        </div>
      </a>
    </div>
  );
};

export default Card;
