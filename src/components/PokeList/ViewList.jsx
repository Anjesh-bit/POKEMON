import { useDispatch, useSelector } from "react-redux";
import AntModal from "../common/Modal/AntdModal";
import AntdTabs from "../common/Tabs/Tabs";
import AntdButton from "../common/Button/AntdButton";
import { addTeams } from "../../slices/CreateTeamsSlice";
import { useEffect, useState } from "react";
import notifications from "../common/Notification/Notification";

const ViewList = ({ open, handleCancel }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.teams);
  const [countValue, setCountValue] = useState(0);
  const [count, setCount] = useState(0);

  const items = [
    {
      key: "1",
      label: "About",
      children: (
        <div className="flex flex-col gap-y-2">
          <div className="flex gap-x-2">
            <span className="text-[#50d71e] font-medium">Species : </span>
            {open?.pokeMon?.types?.map((items) => items.type.name)}
          </div>
          <div className="flex gap-x-2">
            <span className="text-[#50d71e] font-medium">Height : </span>
            {open?.pokeMon?.height} cm
          </div>
          <div className="flex gap-x-2">
            <span className="text-[#50d71e] font-medium">Weight :</span>{" "}
            {open?.pokeMon?.weight} kg
          </div>
          <div className="flex gap-x-2">
            <span className="text-[#50d71e] font-medium">Abilities : </span>
            {open?.pokeMon?.abilities?.map((items) => items.ability.name)}
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "Base Stats",
      children: (
        <>
          <div className="flex justify-between">
            {
              <div className="flex flex-col gap-y-2">
                <span className="text-[#50d71e] font-medium">Base Stats :</span>

                {open?.pokeMon?.stats?.map((items) => (
                  <div>
                    <div>{items.base_stat}</div>
                  </div>
                ))}
              </div>
            }

            {
              <div className="flex flex-col gap-y-2">
                <span className="text-[#50d71e] font-medium">Effort :</span>
                {open?.pokeMon?.stats?.map((items) => (
                  <div>
                    <div>{items.effort}</div>
                  </div>
                ))}
              </div>
            }

            {
              <div className="flex flex-col gap-y-2">
                <span className="text-[#50d71e] font-medium">Stat Name:</span>
                {open?.pokeMon?.stats?.map((items) => (
                  <div>
                    <div>{items.stat.name}</div>
                  </div>
                ))}
              </div>
            }
          </div>
        </>
      ),
    },
    {
      key: "3",
      label: "Evolution",
      children: <div></div>,
    },
  ];

  const handleOnClickCreate = (e) => {
    if (data?.pokeData?.length >= 5) {
      notifications(
        "Success",
        "Your have succesfully added 6 pokemon to your team. Go to view teams.",
        "success"
      );
    }
    setCount(count + 1);
    dispatch(
      addTeams({ pokeItems: { pokeItems: open?.pokeMon, count: count } })
    );
  };

  useEffect(() => {
    const filteredData = data?.pokeData.find(
      (items) => items.items.id === open?.pokeMon?.id
    );
    const quantityData = filteredData
      ? filteredData
      : {
          count:
            JSON.parse(localStorage.getItem("pokeCreated"))?.find(
              (items) => items?.items?.id === open?.pokeMon?.id
            )?.count || 0,
        };
    setCountValue(quantityData?.count);
  }, [data, open?.pokeMon?.id]);

  return (
    <AntModal open={open?.open} handleCancel={handleCancel}>
      <div className="flex flex-col gap-y-2">
        <div>
          {countValue === 0 && data?.pokeData?.length <= 5 && (
            <AntdButton
              classNames="text-[#50d71e]"
              btnText="Add to team"
              handleOnClickCreate={handleOnClickCreate}
            />
          )}
        </div>
        <>
          <div className="mb-2 font-medium text-[#50d71e] text-2xl tracking-wide">
            {open?.pokeMon?.name}
          </div>
          <div className="flex gap-2">
            {open?.pokeMon?.types?.map((items) => (
              <div className="bg-[#50d71e] text-white p-1 text-center rounded-xl px-2 py-1">
                {items.type.name}
              </div>
            ))}
          </div>
          <div className="h-60 ml-auto mr-auto">
            <img
              src={open?.pokeMon?.frontShiny}
              alt={open?.pokeMon?.name}
              className="h-full object-cover"
            />
          </div>
        </>
        <AntdTabs items={items} backgroundColor="transparent" />
      </div>
    </AntModal>
  );
};

export default ViewList;
