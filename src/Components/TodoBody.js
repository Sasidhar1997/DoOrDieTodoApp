import React from "react";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

class TodoBody extends React.Component {
    render() {
        return (
            <React.Fragment>
                <TodoForm />
                <TodoList />
            </React.Fragment>
        );
    }
}

export default TodoBody;
