import { Character } from "@/redux/characterTypes";
import Image from "next/image";

const CharactersList = ({ characters }: { characters: Character[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full  place-items-center">
      {characters.map(({ id, name, image, status, gender }) => (
        <div
          key={id}
          className="w-full h-full max-w-[220px] min-h-[320px] bg-gray-50 flex flex-col justify-around items-center rounded shadow p-3"
        >
          <div>
            <Image
              alt={name}
              src={image}
              width={180}
              height={180}
              className="rounded"
              priority
            />
          </div>
          <div className="text-sm  text-black w-full space-y-1">
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
      ))}
    </div>
  );
};

export default CharactersList;
