import React from 'react';

function ButtonSubscribe({label, name}) {
    return (
        <div className="subscribe">
            <div className="input-group">
                <input type="text" required />
                <span className="highlight">
                            </span>
                <span className="bar">
                            </span>
                <label>{label}</label>
            </div>

            <button type="submit">
                <div className="icon">
                    {name}
                    <span className="material-symbols-outlined">arrow_forward_ios</span>
                </div>
            </button>
        </div>
    );
}

export default ButtonSubscribe;