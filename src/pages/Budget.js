import React, { useState } from "react";
import Calendar from "../components/Calendar";
import '../styles/Budget.css';


const Budget = () => {
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);

    const incomeExpenses = [
        { day: 1, income: 100, expense: 50 },
        { day: 2, income: 200, expense: 150 }
    ];

    return (
        <div className="budget-container">
            <div className="header">
                <button onClick={() => setMonth(month -1)}>Previous</button>
                <span>{`${year} - ${month}`}</span>
                <button onClick={() => setMonth(month + 1)}>Next</button>
            </div>
        </div>
    );
};

export default Budget;

