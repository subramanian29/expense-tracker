import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Range(props) {

    const [range, setRange] = useState({ startDate: "", endDate: "" });
    let reroute = useNavigate();

    async function filter() {
        let res = await fetch("http://localhost:8000/expense/range",
            {
                method: 'POST',
                body: JSON.stringify(range),
                headers: {
                    "Content-Type": "application/json",
                }
            });
        res = await res.json();
        props.changeExpense(res);
        console.log(res);
        reroute("/allexpense");
    }

    function reset(){
        setRange(()=>{return {startDate:"",endDate:""}});
    }

    return (
        <div className="card p-4 shadow-sm">
            <h3 className="text-center mb-4">Choose a Date Range for Statement</h3>

            <div className="mb-3">
                <label htmlFor="start" className="form-label">Enter the starting date</label>
                <input 
                    type="date" 
                    name="startDate" 
                    id="start" 
                    className="form-control" 
                    value={range.startDate} 
                    onChange={(e) => { let x = { ...range, startDate: e.target.value }; setRange(x); }} 
                />
            </div>

            <div className="mb-3">
                <label htmlFor="end" className="form-label">Enter the ending date</label>
                <input 
                    type="date" 
                    name="endDate" 
                    id="end" 
                    className="form-control" 
                    value={range.endDate} 
                    onChange={(e) => { let x = { ...range, endDate: e.target.value }; setRange(x); }} 
                />
            </div>

            <button className="btn btn-primary w-100" onClick={filter}>Filter</button>
            <button className="btn btn-primary w-100 mt-2" onClick={()=>{window.location.reload()}}>Reset</button>
        </div>
    );
}

export default Range;
