import React from 'react';
import { decrement } from '../features/counter/counterSlice';
import { useDispatch } from 'react-redux';

function RButton () {

    const dispatch = useDispatch();

    return (
        <div>
            <button
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </div>
    );
}


export default RButton;