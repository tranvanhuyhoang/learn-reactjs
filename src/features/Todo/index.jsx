
import React from "react";
import TodoList from "./components/TodoList";

function TodoFeature(props){
    const todoList = [
        {
            id: 1,
            title: "eat"
        },
        {
            id: 2,
            title: "sleep"
        },
        {
            id: 3,
            title: "code"
        },
    ]
    return (<div>
        <h3>TODO LIST</h3>
        <TodoList todoList={todoList}/>
    </div>)
}

export default TodoFeature;