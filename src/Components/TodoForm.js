import React from "react";

class TodoForm extends React.Component {
    render() {
        return (
            // <form>
            //     <div class="form-group">
            //         <input
            //             type="email"
            //             class="form-control"
            //             id="exampleFormControlInput1"
            //             placeholder="Enter Tasks"
            //         />
            //         <button type="submit" class="btn btn-primary">
            //             Submit
            //         </button>
            //     </div>
            // </form>
            <div class="input-group">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Tasks"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                />
                <div class="button">
                    <button
                        style={{ backgroundColor: "red", color: "white" }}
                        class="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
}

export default TodoForm;
