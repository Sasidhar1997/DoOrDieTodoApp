import React from "react";

class TodoForm extends React.Component {
    render() {
        return (
            <form id="todoForm" onSubmit={this.props.addTodoItem}>
                <div className="input-group">
                    <input
                        name="Tasks"
                        type="text"
                        className="form-control"
                        placeholder="Enter Tasks"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                    />
                    <div className="button">
                        <button
                            style={{ backgroundColor: "red", color: "white" }}
                            className="btn btn-outline-secondary"
                            type="submit"
                            id="button-addon2"
                            // onClick={() => {
                            //     window.alert("Task Added");
                            // }}
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
