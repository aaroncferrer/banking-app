import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
import './budget.css';
import { useState } from 'react';
import ModalComponent from './ModalComponent';
import { v4 as uuidv4 } from 'uuid';

function Budget(props){

    const {setExpenses,adminBalance, setAdminBalance} = props;
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const expenseId = uuidv4();

    let [expenseValue, setExpenseValue] = useState('');
    let [costValue, setCostValue] = useState('');

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [showBudget, setShowBudget] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [editIndex, setEditIndex] = useState(0);

    function onTransaction(e){
        e.preventDefault();
        console.log(typeof costValue);

        costValue = parseFloat(costValue);

        console.log(typeof costValue);

        if(currentUser.expenses.length >= 5){
            alert('Max of 5 items only. Delete or edit a task instead.');
            return;
        }else if(+costValue > currentUser.adminBalance){
            alert('Insufficient fund.');
            return;
        }else if(costValue === '' || expenseValue === ''){
            alert('Make sure all input fields are filled.');
            return
        }else if(isNaN(costValue)){
            alert('Invalid expense cost.');
            return;
        }else {
            const newExpense = {
                expense: expenseValue,
                cost: +costValue,
                expenseId: expenseId
            }
            setExpenses(newExpense)
            currentUser.expenses.push(newExpense);
            setAdminBalance(adminBalance - +costValue);
            currentUser.adminBalance = adminBalance - +costValue;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            setExpenseValue('');
            setCostValue('');
        }
        setModalIsOpen(false);
    }

    function editExpense(e, expenseId, updatedExpenseValue, updatedCostValue){
        e.preventDefault();
        const currentExpense = currentUser.expenses.find(expense => expense.expenseId === expenseId);
        currentExpense.expense = updatedExpenseValue;
        const diffValue = updatedCostValue - currentExpense.cost
        if((currentUser.adminBalance = adminBalance - +diffValue) < 0){
            alert('Insufficient funds.');
            return
        }
        setAdminBalance(adminBalance - +diffValue);
        currentUser.adminBalance = adminBalance - +diffValue;
        currentExpense.cost = updatedCostValue;
        setExpenses(currentUser.expenses);        
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        setModalIsOpen(false);
    }

    function deleteExpense(expenseId){
        const expenseIndex = currentUser.expenses.findIndex(expense => expense.expenseId === expenseId)
        if(expenseIndex === -1){
            console.error(`Expense with id ${expenseId} not found`);
            return;
        }

        const deletedExpense = currentUser.expenses.splice(expenseIndex, 1);
        setAdminBalance(adminBalance + +deletedExpense[0].cost);
        currentUser.adminBalance = adminBalance + +deletedExpense[0].cost;
        setExpenses(currentUser.expenses);
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
                {currentUser.expenses.map((expense) => (
                    <tr key={expense.expenseId}>
                        <td className='budget-first-column'>{expense.expense}</td>
                        <td className='budget-second-column'>${expense.cost}.00</td>
                        <td>
                        <FontAwesomeIcon 
                            className='budget-action' 
                            icon={faPencil} 
                            onClick={() => 
                                {setModalIsOpen(true);
                                setShowBudget(false);
                                setEditIndex(expense.expenseId); 
                                setShowEdit(true);
                                const currentExpense = currentUser.expenses.find(e => e.expenseId === expense.expenseId)
                                setExpenseValue(currentExpense.expense); 
                                setCostValue(currentExpense.cost);
                                }}
                        />
                        <FontAwesomeIcon 
                            className='budget-action' 
                            icon={faTrash}
                            onClick={() => deleteExpense(expense.expenseId)}                  
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
            <button 
                className="budget-btn" 
                onClick={() => {
                    setModalIsOpen(true); 
                    setShowBudget(true); 
                    setShowEdit(false);
                    setExpenseValue(''); 
                    setCostValue('');
                    }}
                >
                Add Expense
            </button>
        </table>
        
        <ModalComponent modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} showBudget={showBudget} onTransaction={onTransaction} expenseValue={expenseValue} setExpenseValue={setExpenseValue} costValue={costValue} setCostValue={setCostValue} showEdit={showEdit} editExpense={editExpense} editIndex={editIndex} />

        </>
    )
}

export default Budget;