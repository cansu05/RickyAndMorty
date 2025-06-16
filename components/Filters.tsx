"use client";

import { useSearchParams, useRouter } from "next/navigation";
import SelectFilter from "./SelectFilter";

const statusList = ["Alive", "Dead", "Unknown", "All"];
const speciesList = [
  "Human",
  "Alien",
  "Mythological Creature",
  "Robot",
  "Animal",
  "Cronenberg",
  "Unknown",
  "All",
];
const genderList = ["Male", "Female", "Genderless", "Unknown", "All"];

const Filters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleFilterChange = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "All") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    params.set("page", "1");

    router.push(`?${params.toString()}`);
  };

  const status = searchParams.get("status") || "";
  const gender = searchParams.get("gender") || "";
  const species = searchParams.get("species") || "";

  return (
    <div className="flex flex-col md:flex-row gap-5 px-5">
      <SelectFilter
        label="Status"
        options={statusList}
        value={status}
        onChange={(v) => handleFilterChange("status", v)}
      />
      <SelectFilter
        label="Gender"
        options={genderList}
        value={gender}
        onChange={(v) => handleFilterChange("gender", v)}
      />
      <SelectFilter
        label="Species"
        options={speciesList}
        value={species}
        onChange={(v) => handleFilterChange("species", v)}
      />
    </div>
  );
};

export default Filters;
