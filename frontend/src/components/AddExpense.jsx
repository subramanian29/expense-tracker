import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function AddExpense() {
    let [expense, setExpense] = useState({ date: "", reason: "", amount: 0, type: "expenditure" });
    
    const reroute= useNavigate();
    async function addStatement() {
        let res = await fetch("http://localhost:8000/expense", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(expense)
        });
        reroute("/allexpense")
     
    }

   

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className={`card p-4 `}>
                <h1 className="text-center mb-4">Enter The Details</h1>

                <div className="mb-3">
                    <label htmlFor="type" className="form-label">Type</label>
                    <select
                        className={`form-select ${expense.type === "income" ? "text-success" : "text-danger"}`}
                        name="type"
                        id="type"
                        value={expense.type}
                        onChange={(e) => { let x = { ...expense, type: e.target.value }; setExpense(x) }}
                    >
                        <option value="expenditure">Expenditure</option>
                        <option value="income">Income</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="reason" className="form-label">Enter reason</label>
                    <input
                        type="text"
                        className="form-control"
                        name="reason"
                        id="reason"
                        value={expense.reason}
                        onChange={(e) => { let x = { ...expense, reason: e.target.value }; setExpense(x) }}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Enter the amount</label>
                    <input
                        type="number"
                        className="form-control"
                        name="amount"
                        id="amount"
                        value={expense.amount}
                        onChange={(e) => { let x = { ...expense, amount: e.target.value }; setExpense(x) }}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Enter the date</label>
                    <input
                        type="date"
                        className="form-control"
                        name="date"
                        id="date"
                        value={expense.date}
                        onChange={(e) => { let x = { ...expense, date: e.target.value }; setExpense(x) }}
                    />
                </div>

                <button className="btn btn-primary w-100" onClick={addStatement}>Add</button>
            </div>
        </div>
    )
}

export default AddExpense;
