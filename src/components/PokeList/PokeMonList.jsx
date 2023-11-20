import React, { useCallback, useMemo, useState } from "react";
import AntdTabs from "../common/Tabs/Tabs";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Spin } from "antd";

import {
  useFetchPokeMonByGen,
  useFetchUrlDetailList,
  useFetchUrlList,
} from "../../services/HomeSetUp";

import { openModal, closeModal } from "../../slices/ModalSlice";
import ViewList from "./ViewList";
import AntdButton from "../common/Button/AntdButton";

const PokeMonList = () => {
  const [keys, setKeys] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalData = useSelector((state) => state.modal);

  const { data: pokeMonByGen } = useFetchPokeMonByGen(keys);
  const pokeMonCopied = { ...pokeMonByGen };
  const pokeData = useFetchUrlList(
    pokeMonCopied?.pokemon_species?.slice(0, 10)
  );

  const data = useFetchUrlDetailList(pokeData);

  const pokemonAllData = useMemo(() => {
    return data?.map((items) => {
      return {
        name: items?.data?.name,
        id: items?.data?.id,
        height: items?.data?.height,
        weight: items?.data?.weight,
        stats: items?.data?.stats,
        abilities: items?.data?.abilities,
        types: items?.data?.types,
        baseExp: items?.data?.base_experience,
        frontShiny:
          items?.data?.sprites?.other?.["official-artwork"]?.front_default,
        isLoading: items.isLoading,
      };
    });
  }, [data]);

  const handleOpenModal = (index) => {
    dispatch(openModal(index));
  };

  const RenderItems = React.memo(
    ({ pokemonAllData, backgroundColor, indexModifier, handleOpenModal }) => (
      <div className="grid grid-cols-6 gap-1 md:grid-cols-4 lg:grid-cols-5 pokeSm">
        {pokemonAllData?.map((items, index) => (
          <>
            <div
              className={`p-5 ${backgroundColor}`}
              key={uuid()}
              onClick={() => handleOpenModal({ pokeItems: items })}
            >
              <div className="flex flex-col justify-center items-center gap-5">
                {items.isLoading && <Spin />}
                <div className="text-2xl text-white">{`#00${
                  index + indexModifier
                } ${items.name}`}</div>
                <div className="flex flex-col gap-3">
                  {items?.types?.map((typeItem, typeIndex) => (
                    <div
                      className="bg-rose-300 px-2 py-1 text-center rounded-xl"
                      key={typeIndex}
                    >
                      {typeItem.type.name}
                    </div>
                  ))}
                </div>
                <div>
                  <img src={items.frontShiny} alt={items.name} />
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    )
  );

  const generateItems = useCallback((pokemonAllData, handleOpenModal) => {
    const colors = [
      "bg-rose-600",
      "bg-rose-400",
      "bg-rose-200",
      "bg-rose-300",
      "bg-rose-400",
      "bg-rose-500",
      "bg-rose-200",
      "bg-rose-500",
    ];

    return colors.map((backgroundColor, index) => ({
      key: `${index + 1}`,
      label: `i${index + 1}`,
      children: (
        <RenderItems
          pokemonAllData={pokemonAllData}
          backgroundColor={backgroundColor}
          indexModifier={index}
          handleOpenModal={handleOpenModal}
        />
      ),
    }));
  }, []);

  const items = generateItems(pokemonAllData, handleOpenModal);

  const onChange = (e) => {
    setKeys(e);
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  const handleOnClickCreate = (e) => {
    navigate("/pokemon/create");
  };

  return (
    <div className="flex flex-col bg-[white] gap-4 pl-[50px] pr-[50px] paddingSm">
      <div className="text-center text-[#50d71e] font-medium pt-4">
        Select Generations
      </div>
      <div>
        <AntdButton
          classNames="text-[#50d71e]"
          btnText="Your Teams"
          handleOnClickCreate={handleOnClickCreate}
        />
      </div>
      <AntdTabs
        items={items}
        defaultActiveKey="1"
        centered
        backgroundColor="#d5d5d5"
        onChange={onChange}
      />
      {modalData?.open && (
        <ViewList
          open={{ open: modalData?.open, pokeMon: modalData?.pokeData }}
          handleCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default PokeMonList;
