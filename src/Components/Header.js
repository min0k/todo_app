import React from "react";

export default function Header() {
    return (
        <div className="header">
            <h1>Todo</h1>
            <form>
                <input placeholder="new todo"></input>
                <button>create</button>
            </form>
        </div>
    )
}