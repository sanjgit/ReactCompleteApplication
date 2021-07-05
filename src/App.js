import logo from './logo.svg';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
function App() {
  const expenses=[
    {
    id:0,
    title:"Car Insurance",
    amount:678.98,
    date: new Date(2021,2,28)
  },
  {
    id:1,
    title:"Toilet Papers",
    amount:678.98,
    date: new Date(2021,2,28)
  },
  {
    id:2,
    title:"Gorceries Expenses",
    amount:678.98,
    date: new Date(2021,2,28)
  }]
  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };
  return (
    <div className="App">
    <NewExpense  onAddExpense={addExpenseHandler}/>
    <Expenses items={expenses} />
    </div>
  );
}

export default App;
