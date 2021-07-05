import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';

function ExpenseItem(props) {
  const [title,setTitle]=useState(props.title);
  console.log("Called");
  const clickHandler = () => {
    setTitle('Update');   
  }
  return (
  <Card className="expense-item"> 
    <ExpenseDate date={props.date}></ExpenseDate>
    <div className="expense-item__description">
        <h2> {title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>On Click</button>
    </div>
  </Card>
  );
}
export default ExpenseItem;
