import React from "react";

class TodoList extends React.Component {
    render() {
        var todoListData = this.props.todoListData;
        console.log(todoListData);
        return <h1>Hi!</h1>;
    }
}

export default TodoList;
