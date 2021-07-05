import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props){
    const expenseFilterChangeHandler= changedValue=>{
        console.log(changedValue);
    }

    return (
        <div>       
        <ExpenseFilter onExpenseFilterChange={expenseFilterChangeHandler}/>
        <Card className="expenses">
            <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
            <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
            <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
        </Card>
    </div>
    )   
    
}

export default Expenses;