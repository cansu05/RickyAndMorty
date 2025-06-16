"use client";
import { useSearchParams, useRouter } from "next/navigation";

type Props = {
  totalPages: number;
};

const Pagination = ({ totalPages }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page") || "1");

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex gap-2 justify-center items-center lg:mt-0 mt-10">
      <button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
        className="border-2 border-black px-3 py-1 bg-white"
      >
        Prev
      </button>
      <span className="text-sm">
        {currentPage} / {totalPages}
      </span>
      <button
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="border-2 border-black px-3 py-1 bg-white"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
