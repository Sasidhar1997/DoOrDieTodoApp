import React from "react";

class TodoForm extends React.Component {
    render() {
        return (
            <form>
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
