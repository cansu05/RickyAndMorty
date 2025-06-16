"use client";

import { fetchCharacters } from "@/redux/characterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Filters from "./Filters";
import CharactersList from "./CharactersList";
import Pagination from "./Pagination";

const CharacterContainer = () => {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    for (const [key, value] of params.entries()) {
      if (!value || value === "All") {
        params.delete(key);
      }
    }

    dispatch(fetchCharacters(params.toString()));
  }, [searchParams, dispatch]);

  const { characters, info, error } = useAppSelector(
    (state) => state.characters
  );

  return (
    <div className="flex flex-col m-10 space-y-10 w-full max-w-[1200px] mx-auto">
      <div className="flex lg:flex-row flex-col justify-between">
        <Filters />
        <Pagination totalPages={info.pages} />
      </div>
      {error === "No characters found" ? (
        <p>No characters found with these filters.</p>
      ) : (
        <div>
          <h1 className="text-xl font-bold tracking-widest text-center mb-5">
            👾 Rick & Morty Catalog
          </h1>
          <CharactersList characters={characters} />
        </div>
      )}
    </div>
  );
};
export default CharacterContainer;
