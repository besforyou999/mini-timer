import React from 'react';
import { increment } from '../features/counter/counterSlice';
import { useDispatch } from 'react-redux';

function LButton () {

    const dispatch = useDispatch();

    return (
        <div>
            <button
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
        </div>
    );
}


export default LButton;