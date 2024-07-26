import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../App';

const Counter = ({ count, setCount }) => {
    const onClickAdd = () => {
        setCount(count + 1);
    };

    const onClickSubtract = () => {
        setCount(count - 1);
    };

    return (
        <div className="counter-container">
            <div className="counter-card">
                <p className="counter-text">Compteur:<br/> {count}</p>
                <div className="btn-group" role="group">
                    <button onClick={onClickAdd} className="btn-custom-add">
                        Ajouter
                    </button>
                    <button onClick={onClickSubtract} className="btn-custom-subtract">
                        Soustraire
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;