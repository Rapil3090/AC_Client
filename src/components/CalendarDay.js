import React from "react";
import '../styles/CalendarDay.css';

const CalendarDay = ({ day, income, expense }) => {

    return (
        <div className="calendar-day">
            <div className="day-number">{day}</div>
            <div className="income">Income: ${income}</div>
            <div className="expense">Expense: ${expense}</div>
        </div>
    );
};

export default CalendarDay;