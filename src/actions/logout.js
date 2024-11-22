import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteItem } from "../helpers";

export async function logoutAction() {
    //delete user
    deleteItem({
        key: "userName",
    })
    // delete budgets
    deleteItem({
        key: "budgets",
    })
    //delete expenses
    deleteItem({
        key: "expenses",
    })
    toast.success("Your account has been deleted", {
        position: 'top-right'
    })
    //return redirect
    return redirect('/')
}