import { useLoaderData } from "react-router-dom";

function Show() {
  const aPause: any = useLoaderData();
  // const id: number = aPause.id;
  return (
    <div className="show">
      <h1>{aPause.length}</h1>
    </div>
  );
}

export default Show;
