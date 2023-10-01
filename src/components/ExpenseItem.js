import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import {FaCirclePlus, FaCircleMinus} from 'react-icons/fa6'
import { AppContext } from '../context/AppContext';
import '../App.css'
const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
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
    const increase = ()=>{
        increaseAllocation(props.name);        
    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    const decrease = ()=>{
        decreaseAllocation(props.name);
    }
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        {/* <td><button onClick={event=> increaseAllocation(props.name)}>+</button></td> */}
        <td><FaCirclePlus className='plus' size='1.5em' onClick={increase}></FaCirclePlus></td>
        <td><FaCircleMinus className='minus' size='1.5em' onClick={decrease}></FaCircleMinus></td>
        {/* <td><button onClick={event=> decreaseAllocation(props.name)}>-</button></td> */}
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;
