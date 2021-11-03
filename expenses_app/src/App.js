import { ExpenseList } from "./components/ExpenseList";

const expenses = [
  {
    id: "e1",
    title: "Food for Grigi",
    amount: 7.00,
    date: new Date(2021, 10, 16)
  },
  {
    id: "e2",
    title: "Cotto Dinner",
    amount: 135.00,
    date: new Date(2021, 9, 10)
  },
  {
    id: "e3",
    title: "Rollerskates",
    amount: 85.00,
    date: new Date(2021, 5, 27)
  },
  {
    id: "e4",
    title: "Birthday Cake",
    amount: 100.00,
    date: new Date(2021, 7, 26)
  }
];

const App = () => {
  return (
    <div>
        <h2>Let's get started!</h2>
        <ExpenseList items={expenses}/>  
    </div>
  );
}

export default App;
