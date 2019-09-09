import React from "react";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import uuid from "uuid/v4";

class TodoBody extends React.Component {
    state = {
        todoListData: []
    };

    addTodoItem = event => {
        event.preventDefault();
        let value = event.target.Tasks.value;
        console.log(value);
        if (value) {
            var copyList = this.state.todoListData.slice();
            copyList.push({
                id: uuid(),
                todo: value,
                createdAt: new Date().toISOString(),
                isCompleted: false,
                completedAt: null
            });

            this.setState({
                todoListData: copyList
            });
            alert("Task Added");
        } else {
            alert("enter the correct value !!");
        }
        document.getElementById("todoForm").reset();
    };

    render() {
        console.log(this.state);
        return (
            <React.Fragment>
                <TodoForm addTodoItem={this.addTodoItem} />
                <TodoList todoListData={this.state.todoListData} />
            </React.Fragment>
        );
    }
}

export default TodoBody;
