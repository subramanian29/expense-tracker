import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div className='container d-flex align-items-center justify-content-center min-vh-100'>
            <div className='text-center'>
                <h1>Expense Tracker</h1>
                <p className='lead'>
                    Keep track of your expenses and manage your finances efficiently!
                </p>
                <div className='mt-4'>
                    <Link to="/allexpense" className='btn btn-primary mx-2'>
                        View All Expenses
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
