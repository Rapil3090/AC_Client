import React, { useState } from "react";
import CalendarDay from './CalendarDay';
import '../styles/Calendar.css';

const Calendar = ({ year, month, incomeExpenses }) => {
    const [currentDate, setCurrentDate] = useState(new Date(year, month - 1));

    const months = [
        "1월", "2월", "3월", "4월", "5월", "6월",
        "7월", "8월", "9월", "10월", "11월", "12월"
    ];

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    };

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
    };

    const renderDays = () => {
        const days = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }
        for (let day = 1; day <= daysInMonth; day++) {
            const incomeExpense = incomeExpenses.find(entry => entry.day === day) || {};
            days.push(
                <CalendarDay
                    key={day}
                    day={day}
                    income={incomeExpense.income || 0}
                    expense={incomeExpense.expense || 0}
                />
            );
        }
        return days;
    };

    return (
        <div className="calendar-container">
            <div className="calendar-header">
                <button onClick={prevMonth}>&lt;</button>
                <h2>{months[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
                <button onClick={nextMonth}>&gt;</button>
            </div>
            <div className="calendar-grid">
                {renderDays()}
            </div>
        </div>
    );
};

export default Calendar;
