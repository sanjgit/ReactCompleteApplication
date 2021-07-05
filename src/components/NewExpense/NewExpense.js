import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props){
    const saveExpenseDataHandler = expense =>{
        const expenseData={
            ...expense,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>;

}
export default NewExpense;