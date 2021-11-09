import { NewExpenseForm } from "./NewExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.floor(100000 + Math.random() * 900000)
        };
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export { NewExpense }