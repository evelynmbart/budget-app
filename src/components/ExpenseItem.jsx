import { formatCurrency, formatDateToLocaleString } from "../helpers";

export function ExpenseItem({ expense }) {
  console.log(expense.amount, expense.name);
  return (
    <>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formatDateToLocaleString(expense.createdAt)}</td>
    </>
  );
}
