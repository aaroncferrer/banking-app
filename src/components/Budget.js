import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
import './budget.css';
import { useState } from 'react';
import ModalComponent from './ModalComponent';

function Budget(props){

    const {setExpenses} = props;
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const [expenseValue, setExpenseValue] = useState('');
    const [costValue, setCostValue] = useState('');

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [showBudget, setShowBudget] = useState(false);

    function onTransaction(e){
        const newExpense = {
            expense: expenseValue,
            cost: costValue
        }
        setExpenses(newExpense)
        currentUser.expenses.push(newExpense);
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
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
                {currentUser.expenses.map(expense => (
                    <tr>
                        <td className='budget-first-column'>{expense.expense}</td>
                        <td className='budget-second-column'>${expense.cost}.00</td>
                        <td>
                        <FontAwesomeIcon className='budget-action' icon={faPencil} />
                        <FontAwesomeIcon className='budget-action' icon={faTrash} />
                        </td>
                    </tr>
                ))}
            </tbody>
            <button className="budget-btn" onClick={() => {setModalIsOpen(true); setShowBudget(true)}}>
                Add Expense
            </button>
        </table>
        
        <ModalComponent modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} showBudget={showBudget} onTransaction={onTransaction} expenseValue={expenseValue} setExpenseValue={setExpenseValue} costValue={costValue} setCostValue={setCostValue} />

        </>
    )
}

export default Budget;