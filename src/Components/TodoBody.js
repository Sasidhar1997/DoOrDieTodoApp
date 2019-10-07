import React from "react";
// import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class TodoBody extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* <TodoForm /> */}
                {/* <hr /> */}
                <TodoList />
            </React.Fragment>
        );
    }
}

export default TodoBody;
