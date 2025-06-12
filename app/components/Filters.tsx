"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams, useRouter } from "next/navigation";

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

    router.push(`?${params.toString()}`);
  };

  const status = searchParams.get("status") || "";
  const gender = searchParams.get("gender") || "";
  const species = searchParams.get("species") || "";

  return (
    <div className="flex lg:flex-row md:flex-row flex-col gap-5 px-5">
      <Select
        value={status}
        onValueChange={(value) => handleFilterChange("status", value)}
      >
        <SelectTrigger className="w-[180px] border border-gray-950 bg-emerald-200">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          {statusList.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={gender}
        onValueChange={(value) => handleFilterChange("gender", value)}
      >
        <SelectTrigger className="w-[180px] border border-gray-950 bg-violet-300">
          <SelectValue placeholder="Gender" />
        </SelectTrigger>
        <SelectContent>
          {genderList.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={species}
        onValueChange={(value) => handleFilterChange("species", value)}
      >
        <SelectTrigger className="w-[180px] border border-gray-950 bg-pink-300">
          <SelectValue placeholder="Species" />
        </SelectTrigger>
        <SelectContent>
          {speciesList.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filters;
