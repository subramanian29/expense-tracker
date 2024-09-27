import React from 'react';

function Total({ income, expense }) {
    return (
        <div className='container mt-5'>
            <div className="row text-center">
                <div className="col-md-6">
                    <div className="card border-success mb-3">
                        <div className="card-header bg-success text-white">Income</div>
                        <div className="card-body">
                            <h3 className="card-title">{income}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card border-danger mb-3">
                        <div className="card-header bg-danger text-white">Expense</div>
                        <div className="card-body">
                            <h3 className="card-title">{expense}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Total;
