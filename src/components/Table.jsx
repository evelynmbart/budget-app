import { ExpenseItem } from "./ExpenseItem";

() => {
  return <div />;
};

() => <div />;

export function Table({ expenses }) {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            {["Name", "Amount", "Date", "Budget", ""].map((i, index) => (
              <th key={index}>{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            return (
              <tr key={expense.id}>
                <ExpenseItem expense={expense} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
