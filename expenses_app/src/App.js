import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Birthday Cake',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2',
    title: 'Cat Food', 
    amount: 7.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    id: 'e3',
    title: 'Roller Skates',
    amount: 94.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Salad',
    amount: 4.50,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
