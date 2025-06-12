"use client";

import { fetchCharacters } from "@/redux/characterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import CharactersList from "./CharactersList";
import Filters from "./Filters";

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

  const { characters, error } = useAppSelector((state) => state.characters);

  return (
    <div className="flex flex-col m-10 space-y-10 w-full max-w-[1200px] mx-auto">
      <Filters />
      {error === "No characters found" ? (
        <p>No characters found with these filters.</p>
      ) : (
        <CharactersList characters={characters} />
      )}
    </div>
  );
};
export default CharacterContainer;
