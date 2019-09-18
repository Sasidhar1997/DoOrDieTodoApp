import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class TodoForm extends React.Component {
    state = {
        todoInput: "",
        deadLine: ""
    };

    todoTextChange = event => {
        if (event.target.value.length <= 100) {
            this.setState({
                todoInput: event.target.value
            });
        }
    };

    todoDateChange = eve => {
        this.setState({
            deadLine: eve
        });
    };

    // handleChange = onChange => {
    //     this.setState({
    //         startDate: onChange
    //     });
    // };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.todoInput) {
            if (this.state.deadLine) {
                let todoInput = this.state.todoInput;
                let deadLine = this.state.deadLine.toISOString();
                let isSuccess = this.props.addTodoItem(todoInput, deadLine);
                if (isSuccess) {
                    this.setState({
                        todoInput: "",
                        deadLine: ""
                    });
                }
            } else {
                alert("Please select deadline");
            }
        } else {
            alert("Please enter task");
        }
    };

    render() {
        return (
            <form id="todoForm" onSubmit={this.handleSubmit} autoComplete="off">
                <div className="input-group">
                    <input
                        name="Tasks"
                        type="text"
                        className="form-control"
                        placeholder="Enter Tasks"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        value={this.state.todoText}
                        onChange={this.todoTextChange}
                    />
                    <DatePicker
                        selected={this.state.deadLine}
                        onChange={this.todoDateChange}
                        className="form-control"
                        placeholderText="Select Date"
                        dateFormat="MMM d, yyyy"
                        name="deadLine"
                    />
                    <div className="button">
                        <button
                            style={{ backgroundColor: "red", color: "white" }}
                            className="btn btn-outline-secondary"
                            type="submit"
                            id="button-addon2"
                        >
                            Add Task
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default TodoForm;
