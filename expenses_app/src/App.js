import ExpenseItem from "./components/ExpenseItem";

const expenses = [
  {
    id: "e1",
    title: "Food for Grigi",
    amount: 7.0,
    date: new Date(2021, 10, 16),
  },
  {
    id: "e2",
    title: "Cotto Dinner",
    amount: 135.0,
    date: new Date(2021, 9, 10),
  },
  {
    id: "e3",
    title: "Rollerskates",
    amount: 85.0,
    date: new Date(2021, 5, 27),
  },
  {
    id: "e4",
    title: "Birthday Cake",
    amount: 100.0,
    date: new Date(2021, 7, 26),
  },
];

const App = () => {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
};

export default App;
