import React from "react";

type Props = {
  totalPosts: number;
  postsOnPage: number;
  setCurrentPage: CallableFunction;
};

const Pagination: React.FC<Props> = ({
  totalPosts,
  postsOnPage,
  setCurrentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsOnPage); i++) {
    pages.push(i);
  }

  if (pages.length <= 1) {
    return <div></div>;
  } else {
    return (
      <div>
        {pages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className="page-button"
            >
              {page}
            </button>
          );
        })}
      </div>
    );
  }
};

export default Pagination;
