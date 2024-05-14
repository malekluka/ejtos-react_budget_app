import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { dispatch } = useContext(AppContext);

    const handleBudgetChange = (event) => {
         if (event.target.value > 20000) {
            alert("Budget cannot exceed £20,000");
        } else {
            setNewBudget(event.target.value);
            dispatch({ type: 'SET_BUDGET', payload: event.target.value });
        }
    };
    return (
<div className='alert alert-secondary'>
     Budget: {currency}
      <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} ></input>
        </div>
    );
};
export default Budget;
