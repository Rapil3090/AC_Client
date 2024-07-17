import React from "react";
import CalendarDay from './CalendarDay';
import '../styles/Calendar.css';


const Calendar = ({ year, month, incomeExpenses }) => {
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDayOfMonth = new Date(year, month -1, 1).getDay();

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
        days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const incomeExpenses = incomeExpenses.find(entry => entry.day === day);
        days.push(
            <CalendarDay
            key = {day}
            day = {day}
            income = {incomeExpenses?.income || 0}
            expense = {incomeExpenses?.expense || 0}
            />
        );
    }

    return (
        <div className="calendar">
            {days}
        </div>
    );
};

export default Calendar;