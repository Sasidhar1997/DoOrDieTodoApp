import React from "react";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

class TodoBody extends React.Component {
    state = {
        todoListData: []
    };

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
