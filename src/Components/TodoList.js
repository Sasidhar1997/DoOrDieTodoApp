import React from "react";
import TodoItem from "./TodoItem.js";

class TodoList extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.todoListData.map(item => (
                    <TodoItem key={item.id} {...item} />
                ))}
            </React.Fragment>
        );
    }
}

export default TodoList;
