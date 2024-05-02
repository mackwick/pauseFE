import Pause from "../components/Pause";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import { useUser } from "@clerk/clerk-react";

const Index: React.FC = () => {
  const allPauses: any = useLoaderData();
  const { user } = useUser();
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 10;

  const usersPauses = allPauses.filter((x: any) => {
    return x.user === user?.id;
  });

  const sortedPauses: any = usersPauses.sort((a: any, b: any) => {
    return b.id - a.id;
  });
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts: any = sortedPauses.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <Header />
      <div className="index">
        <h2>Your Meditation Sessions</h2>

        {currentPosts.map((pause: any) => (
          <Pause
            date={pause.date}
            id={pause.id}
            length={pause.length}
            key={pause.id}
            before={pause.before}
            after={pause.after}
          />
        ))}
        <Pagination
          totalPosts={usersPauses.length}
          postsOnPage={postPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Index;
