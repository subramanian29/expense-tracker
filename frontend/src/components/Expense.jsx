import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Expense({type,date,reason,price}) {
    let col = type === 'income' ? "text-success" : "text-danger";
    
    return (
        <div className="expense row align-items-center border p-3 mb-3">
            <div className="col-md-3 text-center text-muted">
                <strong>{date}</strong>
            </div>
            <div className="col-md-5">
                <h5>{reason}</h5>
            </div>
            <div className="col-md-3 text-end">
                <span className={`fs-4 ${col}`}>{price}</span>
            </div>
            
        </div>
    );
}

export default Expense;
