import React from "react";

export default function Header() {
    return (
        <div className="header">
            <h1 className="test1 test2">🗒️ my todo list</h1>
            <form>
                <input placeholder="new todo"></input>
                <button className="header--button">➕</button>
            </form>
        </div>
    )
}