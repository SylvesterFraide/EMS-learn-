import { BsFillCcCircleFill } from "react-icons/bs";
import { RiPinDistanceLine } from "react-icons/ri";
import { TbAutomaticGearbox } from "react-icons/tb";

export const ProductsItems = ({ item }) => {
  return (
    <div className="bg-pink-100 text-black lg:w-110 w-full h-150 md:h-100 rounded-lg shadow-md">
      <img
        src={item.image}
        alt={item.model}
        className="h-80 md:h-60 w-full rounded-lg "
      />
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
    </div>
  );
};
