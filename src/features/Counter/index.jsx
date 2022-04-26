import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './counterSlice';

CounterFeature.propTypes = {
    
};

function CounterFeature(props) {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    const handleIncreaseClick = () => {
        const action = increment();
        dispatch(action);
    }
    const handleDecreaseClick = () => {
        const action = decrement();
        dispatch(action);
    }
    return (
        <div>
            Counter {counter}
            <div>
                <button onClick={() => handleIncreaseClick()}>Tăng</button>
                <button onClick={handleDecreaseClick}>Giam</button>
            </div>
        </div>
    );
}

export default CounterFeature;