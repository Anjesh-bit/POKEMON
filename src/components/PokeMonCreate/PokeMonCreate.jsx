import { useEffect } from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

const PokeMonCreate = () => {
  const data = useSelector((state) => state.teams);

  useEffect(() => {
    localStorage.setItem("pokeCreated", JSON.stringify(data?.pokeData));
  }, [data]);

  return (
    <div className="grid grid-cols-5 gap-4 pl-[4rem] pr-[4rem] md:grid-cols-4 lg:grid-cols-5 pokeCreated">
      {data?.pokeData?.map((items, index) => (
        <div className="bg-rose-400 p-5" key={uuid()}>
          <div className="flex flex-col justify-center items-center gap-3">
            <div className="text-2xl text-white">{`#00${
              index + " " + items.items?.name
            }`}</div>
            <div className="flex flex-col gap-3">
              {items?.items?.types?.map((items) => (
                <div className="bg-rose-300 p-1 text-center rounded-xl px-2 py-1">
                  {items.type.name}
                </div>
              ))}
            </div>
            <div>
              <img src={items?.items?.frontShiny} alt={items?.items?.name} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokeMonCreate;
