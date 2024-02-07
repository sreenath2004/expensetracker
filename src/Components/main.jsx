import React, { useState } from 'react';
import './list.css';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const handleAddExpense = () => {
    if (text && amount) {
      const newExpense = {
        id: Math.random(),
        text,
        amount: +amount,
      };

      setExpenses([...expenses, newExpense]);

      setText('');
      setAmount('');
    }
  };

  // Calculate total amount
  const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="expense-tracker">
      <h2>Expense Tracker</h2>
      <div className="expense-form">
        <label htmlFor="text">Expense:</label>
        <input
          type="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter expense..."
        />

        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..."
        />

        <button onClick={handleAddExpense}>Add Expense</button>
      </div>

      <div className="expense-list">
        <h3>Expense List</h3>
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              {expense.text}: ${expense.amount}
            </li>
          ))}
        </ul>
        <p>Total: ${totalAmount}</p> {/* Display total amount */}
      </div>
    </div>
  );
};

export default ExpenseTracker;
