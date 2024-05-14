import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { FcPlus } from "react-icons/fc";
import { FaMinusCircle } from "react-icons/fa";


const ExpenseItem = (props) => {
    const { dispatch , currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><FcPlus size='2em' className="increase-btn" onClick={event=> increaseAllocation(props.name)} ></FcPlus></td>
        <td><FaMinusCircle color='rgb(139, 0, 0)' size='2em' className="decrease-btn" onClick={event=> decreaseAllocation(props.name)} ></FaMinusCircle ></td>
        <td><TiDelete size='2em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
