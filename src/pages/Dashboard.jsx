//rrd imports
import { useLoaderData } from "react-router-dom";
//helper functions
import { Intro } from "../components/Intro";
import { fetchData } from "../helpers";

export const dashboardLoader = () => {
  const userName = fetchData("userName");
  return { userName };
};

export function Dashboard() {
  const { userName } = useLoaderData();

  return (
    <>
      <Intro />
    </>
  );
}
