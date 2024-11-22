import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { logoutAction } from "./actions/logout";
import ExpensesPage, {
  expensesAction,
  expensesLoader,
} from "./components/ExpensesPage";
import { Main, mainLoader } from "./layouts/Main";
import BudgetPage, { budgetAction, budgetLoader } from "./pages/BudgetPage";
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import { Error } from "./pages/Error";
//routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "budget/:id",
        element: <BudgetPage />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <Error />,
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
        loader: expensesLoader,
        action: expensesAction,
        errorElement: <Error />,
      },

      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
