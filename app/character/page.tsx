import CharacterContainer from "@/components/CharacterContainer";

import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CharacterContainer />
    </Suspense>
  );
}
