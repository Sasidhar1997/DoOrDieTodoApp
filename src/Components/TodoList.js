import React from "react";
import TodoItem from "./TodoItem.js";
import { connect } from "react-redux";

const TodoList = props => {
    console.log(props);
    return props.list.map(item => <TodoItem key={item.id} {...item} />);
};

const mapStateToProps = ({ todo }) => ({
    list: todo.list,
    count: todo.count
});

export default connect(mapStateToProps)(TodoList);
