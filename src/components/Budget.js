import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
import './budget.css';
import { useState } from 'react';
import ModalComponent from './ModalComponent';

function Budget(props){

    const {setExpenses,adminBalance, setAdminBalance} = props;
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    let [expenseValue, setExpenseValue] = useState('');
    let [costValue, setCostValue] = useState('');

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [showBudget, setShowBudget] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    function onTransaction(e){
        e.preventDefault();

        if(currentUser.expenses.length >= 5){
            alert('Max of 5 items only. Delete or edit a task instead.');
            return;
        }else if(+costValue > currentUser.adminBalance){
            alert('Insufficient fund.');
            return;
        }else if(costValue === '' || expenseValue === ''){
            alert('Test');
            return
        }else {
            const newExpense = {
                expense: expenseValue,
                cost: +costValue
            }
            setExpenses(newExpense)
            currentUser.expenses.push(newExpense);
            setAdminBalance(adminBalance - +costValue);
            currentUser.adminBalance = adminBalance - +costValue;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            setExpenseValue('');
            setCostValue('');
        }
    }

    function editExpense(index){
        const currentExpense = currentUser.expenses[index];
        console.log(currentExpense);
        expenseValue = currentExpense.expense;
        costValue = currentExpense.cost;
        setExpenses(currentUser.expenses);        
        localStorage.setItem('currenUser', JSON.stringify(currentUser));
    }

    function deleteExpense(index){
        currentUser.expenses.splice(index, 1); // Modifies the original array
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        setExpenses(currentUser.expenses);
    }

    return(
        <>
        <table className="budget-table">
            <thead>
                <tr className='budget-caption'>EXPENSES</tr>
                <tr className='budget-label'>
                    <th className='budget-first-column'>Expense Name</th>
                    <th className='budget-second-column'>Cost</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {currentUser.expenses.map((expense, index) => (
                    <tr key={index}>
                        <td className='budget-first-column'>{expense.expense}</td>
                        <td className='budget-second-column'>${expense.cost}.00</td>
                        <td style={{textAlign: 'center'}}>
                        <FontAwesomeIcon 
                            className='budget-action' 
                            icon={faPencil} 
                            onClick={() => 
                                {setModalIsOpen(true); 
                                setShowEdit(true);
                                setExpenseValue(currentUser.expenses[index].expense); 
                                setCostValue(currentUser.expenses[index].cost);
                                }}
                        />
                        <FontAwesomeIcon 
                            className='budget-action' 
                            icon={faTrash}
                            onClick={() => deleteExpense(index)}                  
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
            <button className="budget-btn" onClick={() => {setModalIsOpen(true); setShowBudget(true)}}>
                Add Expense
            </button>
        </table>
        
        <ModalComponent modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} showBudget={showBudget} onTransaction={onTransaction} expenseValue={expenseValue} setExpenseValue={setExpenseValue} costValue={costValue} setCostValue={setCostValue} showEdit={showEdit} editExpense={editExpense} />

        </>
    )
}

export default Budget;