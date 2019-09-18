import React from "react";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import uuid from "uuid/v4";

class TodoBody extends React.Component {
    state = {
        todoListData: []
    };

    addTodoItem = (todoText, deadLine) => {
        try {
            var copyList = this.state.todoListData.slice();
            copyList.push({
                id: uuid(),
                todo: todoText,
                createdAt: new Date().toISOString(),
                isCompleted: false,
                completedAt: null,
                deadLine
            });
            this.setState({
                todoListData: copyList
            });
            return true;
        } catch (error) {
            return false;
        }
    };

    render() {
        return (
            <React.Fragment>
                <TodoForm addTodoItem={this.addTodoItem} />
                <TodoList todoListData={this.state.todoListData} />
            </React.Fragment>
        );
    }
}

export default TodoBody;
