import dynamic from "next/dynamic";
import { Suspense } from "react";

const CharacterContainer = dynamic(
  () => import("@/components/CharacterContainer"),
  {
    ssr: false,
  }
);

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CharacterContainer />
    </Suspense>
  );
}
