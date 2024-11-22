import { ExpenseItem } from "./ExpenseItem";

() => {
  return <div />;
};

() => <div />;

export function Table({ expenses }) {
  console.log("expenses", expenses);
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {["Name", "Amount", "Date"].map((i, index) => (
              <th key={index}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          Hello
          {expenses.map((expense) => {
            return (
              <tr key={expense.id}>
                World
                <ExpenseItem expense={expense} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}