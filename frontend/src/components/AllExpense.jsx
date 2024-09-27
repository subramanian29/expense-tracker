import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Expense from './Expense';
import Range from './Range';
import Total from './Total';
import 'bootstrap/dist/css/bootstrap.min.css';

function Allexpense() {
    const [expenses, setExpenses] = useState([{}]);
    const reroute = useNavigate(); 

    function calculateSummary() {
        let income = 0;
        let expenditure = 0;
        for (let i of expenses) {
            if (i.type === 'income') {
                income += i.amount;
            } else {
                expenditure += i.amount;
            }
        }
        return [income, expenditure];
    }

    async function fetchExpenses() {
        let expense = await fetch("http://localhost:8000/expense");
        expense = await expense.json();
        setExpenses(expense);
    }

    useEffect(() => { fetchExpenses() }, []);

    let expenseList = expenses.map((e, id) => (
        <Expense key={id} date={e.date} reason={e.reason} price={e.amount} type={e.type} />
    ));

    return (
        <div className='container mt-5'>
            <div className="row justify-content-center mb-5">
                <div className="col-md-8 d-flex justify-content-between align-items-center">
                    <Total income={calculateSummary()[0]} expense={calculateSummary()[1]} />
                </div>
            </div>

            <section className='row'>
                <div className='col-md-8'>
                    <div className='card p-3 mb-4'>
                        <div className='card-body'>
                            <div className="d-flex justify-content-between align-items-center">
                                <h4 className="card-title">All Expenses</h4>
                                <button className="btn btn-success" onClick={() => reroute("/addexpense")}>
                                    +
                                </button>
                            </div>
                            <div className='expenseContents'>
                                {expenseList}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-4'>
                    <div className="card p-3 mb-4">
                        <div className="card-body">
                            <h4 className="card-title">Filter Range</h4>
                            <Range className="rangeContents" changeExpense={setExpenses} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Allexpense;
