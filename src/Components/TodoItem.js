import React from "react";
import moment from "moment";

class TodoItem extends React.Component {
    render() {
        return (
            <div class="card">
                <div class="card-body flexible">
                    <div class="custom-control custom-checkbox">
                        <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck1"
                            checked={this.props.isCompleted}
                            disabled={this.props.isCompleted}
                        />
                        <label
                            class="custom-control-label"
                            for="customCheck1"
                        ></label>
                    </div>
                </div>
                <div className="todo-content">
                    <span>
                        Created {moment(this.props.createdAt).calendar()}
                    </span>
                    <h3>{this.props.todo}</h3>
                </div>
                <div className="deadline">
                    {this.props.isCompleted ? (
                        <React.Fragment>
                            <span>Completed on</span>
                            <h5>{moment(this.props.completedAt).calendar()}</h5>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <span>Deadline on</span>
                            <h5>{moment(this.props.deadLine).calendar()}</h5>
                        </React.Fragment>
                    )}
                </div>
                {this.props.isCompleted ? null : (
                    <div className="todo-actions">
                        <button
                            className="btn btn-outline-primary"
                            type="button"
                        >
                            <i className="fas fa-pencil-alt"></i>
                        </button>
                        &nbsp; &nbsp;
                        <button
                            className="btn btn-outline-danger"
                            type="button"
                        >
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

export default TodoItem;
