import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm=(props)=>{
    const [enteredTitle,setExpenseTitle]=useState('');
    const [enteredAmount,setExpenseAmount]=useState('');
    const [enteredDate,setExpenseDate]=useState('');
// const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });
    const titleChangeHandler= (event)=>{
        setExpenseTitle(event.target.value);
         // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
    }
    const amountChangeHandler= (event)=>{
        setExpenseAmount(event.target.value);
    }
    const dateChangeHandler= (event)=>{
        setExpenseDate(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        
        const expenseData = {
          title: enteredTitle,
          amount: enteredAmount,
          date: new Date(enteredDate)
        };
        console.log(expenseData);
        props.onSaveExpenseData(expenseData);
       
        setExpenseTitle('');
        setExpenseAmount('');
        setExpenseDate('');
    };
    
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='submit'>Submit</button>

        </div>
    </form>
}

export default ExpenseForm;