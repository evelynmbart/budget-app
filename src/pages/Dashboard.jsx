//rrd imports
import { useLoaderData } from "react-router-dom";
//helper functions
import { fetchData } from "../helpers";

export const dashboardLoader = () => {
  const userName = fetchData("userName");
  return { userName };
};

export function Dashboard() {
  const { userName } = useLoaderData();

  return (
    <div>
      <h1>{userName}</h1>
      <div>dashboard</div>
    </div>
  );
}
