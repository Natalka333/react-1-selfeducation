import React from "react";

const Controls = ({ onIncrement, onDecrement }) => {
    return (
        <div className="controls">
            <button type="button" onClick={onIncrement}>Увеличим на 1</button>
            <button type="button" onClick={onDecrement}>Уменьшим на 1</button>
        </div>
    )

}

export default Controls;