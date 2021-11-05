import "./NewExpenseForm.css";
import React, { useState } from 'react';

const NewExpenseForm = () => {

    const [userData, setUserData] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: ""
    });

    const titleChangeHandler = (event) => {
        setUserData(() => {
            return {
                ...userData,
                enteredTitle: event.target.value
        }
    })};

    const amountChangeHandler = (event) => {
        setUserData(() => {
            return {
                ...userData,
                enteredAmount: event.target.value
        }
    })};

    const dateChangeHandler = (event) => {
        setUserData(() => {
            return {
                ...userData,
                enteredDate: event.target.value
        }
    })};

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>New Expense</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Submit Expense</button>
            </div>
        </form>
    )
};

export { NewExpenseForm }