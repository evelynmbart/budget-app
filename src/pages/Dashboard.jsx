//rrd imports
import { useLoaderData } from "react-router-dom";
//helper functions
import { Intro } from "../components/Intro";
import { fetchData } from "../helpers";

import { toast } from "react-toastify";

export const dashboardLoader = () => {
  const userName = fetchData("userName");
  return { userName };
};

//action
export async function dashboardAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(`Welcome, ${formData.userName}`);
  } catch (e) {
    throw new Error("There was an error creating your account");
  }
}

// export async function dashboardAction({ request }) {
//   const data = await request.formData();
//   const formData = Object.fromEntries(data)
//   try {
//     throw new Error('Ya done')
//   } catch (e) {
//     throw new Error("There was a problem creating your account.")
//   }
// }

export function Dashboard() {
  const { userName } = useLoaderData();

  return <>{userName ? <p>{userName}</p> : <Intro />}</>;
}
