import React from "react";
import { PaginationContainer } from "./styles";

interface Props {
  perPage: number;
  page: number;
  nextPage: () => void;
  previousPage: () => void;
  maxItems: number;
}

export const Pagination: React.FC<Props> = ({
  perPage,
  page,
  nextPage,
  previousPage,
  maxItems,
}) => {
  const lastPage = Math.ceil(maxItems / perPage);

  return (
    <PaginationContainer>
      <button disabled={page === 1} onClick={previousPage}>
        &lt;
      </button>
      <span>{page}</span>
      <button disabled={page === lastPage} onClick={nextPage}>
        &gt;
      </button>
    </PaginationContainer>
  );
};
