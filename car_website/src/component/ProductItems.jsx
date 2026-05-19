import { BsFillCcCircleFill } from "react-icons/bs";
import { RiPinDistanceLine } from "react-icons/ri";
import { TbAutomaticGearbox } from "react-icons/tb";

export const ProductsItems = ({ item }) => {
  return (
    <div className="bg-pink-100 text-gray-600 hover:opacity-70 h-auto pb-2 w-full h-160 md:h-115 rounded-lg shadow-md">
      <img
        src={item.image}
        alt={item.model}
        className="h-85 md:h-65 w-full rounded-lg"
      />
      <div>
        <div className="flex text-pink-600 ml-2 mt-4 gap-4 text-2xl font-bold">
          <h4>{item.year}</h4>
          <h4 className="">{item.make}</h4> 
          
        </div>
        <p className="ml-2 mt-2 text-xl font-semibold">{item.model}</p>
        <p className="ml-2 text-xl">Ksh.{item.price} per/day</p>
        <div className="flex justify-between mx-2">
          <span className="flex items-center justify-center gap-2">
            <BsFillCcCircleFill />
            <p className="ml-2 my-2 text-lg">{item.engine}</p>
          </span>

          <span className="flex items-center justify-center gap-2">
            <RiPinDistanceLine />
            <p className="ml-2 my-2 text-lg">{item.mileage}</p>
          </span>

          <span className="flex items-center justify-center gap-2">
            <TbAutomaticGearbox />
            <p className="ml-2 my-2 text-lg">{item.transmission}</p>
          </span>
        </div>
        <button className="bg-pink-400/60 hover:bg-pink-500 hover:text-white px-4 py-2 rounded-full ml-2 cursor-pointer">
          Book Now
        </button>
      </div>
    </div>
  );
};
