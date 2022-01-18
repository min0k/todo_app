import React from "react";

export default function TodoCard() {
    return (
        <div className="todocard">
            <p className="todocard--text">take the dog out</p>
            <button className="todocard--button delete">✘</button>
            <button className="todocard--button done">✓</button>
        </div>
    )
}