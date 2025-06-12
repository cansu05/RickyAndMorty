import { Character } from "@/redux/characterTypes";
import Image from "next/image";

const bgColors = [
  "bg-violet-300",
  "bg-pink-300",
  "bg-emerald-200",
  "bg-yellow-300",
  "bg-blue-300",
  "bg-red-300",
  "bg-orange-300",
];

const CharactersList = ({ characters }: { characters: Character[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:px-5 md:px-5 place-items-center">
      {characters.map(({ id, name, image, status, gender }) => {
        const bg = bgColors[id % bgColors.length];
        return (
          <div
            key={id}
            className={`w-full h-full border border-gray-950  max-w-[300px] min-h-[350px] flex flex-col justify-around items-center rounded gap-4 ${bg}`}
          >
            <div className="relative w-full h-full border  border-b-gray-950">
              <Image
                alt={name}
                src={image}
                fill
                sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="text-sm text-black w-full space-y-1 px-3 pb-3">
              <p>
                <span className="font-semibold capitalize">Name: </span>
                {name}
              </p>
              <p>
                <span className="font-semibold capitalize">Status: </span>
                {status}
              </p>
              <p>
                <span className="font-semibold capitalize">Gender: </span>
                {gender}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CharactersList;
