import React from "react";

class DisplayPerson extends React.Component {
    render() {
        // console.log(this.props);
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td>{this.props.name}</td>
                <td>{this.props.age}</td>
                <td>{this.props.city}</td>
                <td>{this.props.phNo}</td>
                <td>{this.props.mail}</td>
                <td>
                    <button
                        type="button"
                        onClick={() => this.props.funcProps(this.props.phNo)}
                    >
                        Call
                    </button>
                </td>
                <td>
                    <button
                        type="button"
                        onClick={() => this.props.funcMail(this.props.mail)}
                    >
                        Mail
                    </button>
                </td>
            </tr>
        );
    }
}

class App extends React.Component {
    state = {
        arr: [
            {
                name: "sudarsan",
                age: 23,
                city: "Velachery",
                phNo: 7383672827,
                mail: "nvshi@gmail.com"
            },
            {
                name: "sasi",
                age: 22,
                city: "Kodambakkam",
                phNo: 9042323165,
                mail: "sasiboggaram@gmail.com"
            },
            {
                name: "Vimal",
                age: 30,
                city: "Greams Road",
                phNo: 9836353722,
                mail: "bjhvvvalk@gmail.com"
            },
            {
                name: "Fehath",
                age: 30,
                city: "Nungambakkam",
                phNo: 9836382637,
                mail: "bjdhdvvalk@gmail.com"
            }
        ]
    };
    funcProps(phNo) {
        window.location.href = `tel:${phNo}`;
    }

    funcMail(mail) {
        window.location.href = `Mailto:${mail}`;
    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table
                                        id="example23"
                                        className="display nowrap table table-hover table-striped table-bordered dataTable"
                                        cellspacing="0"
                                        width="100%"
                                        role="grid"
                                        aria-describedby="example23_info"
                                    >
                                        <thead>
                                            <tr role="row">
                                                <th
                                                    className="sorting_asc"
                                                    tabindex="0"
                                                    aria-controls="example23"
                                                    rowspan="1"
                                                    colspan="1"
                                                    aria-sort="ascending"
                                                    aria-label="Name: activate to sort column descending"
                                                >
                                                    S.No
                                                </th>
                                                <th
                                                    className="sorting_asc"
                                                    tabindex="0"
                                                    aria-controls="example23"
                                                    rowspan="1"
                                                    colspan="1"
                                                    aria-sort="ascending"
                                                    aria-label="Name: activate to sort column descending"
                                                >
                                                    Name
                                                </th>
                                                <th
                                                    className="sorting_asc"
                                                    tabindex="0"
                                                    aria-controls="example23"
                                                    rowspan="1"
                                                    colspan="1"
                                                    aria-sort="ascending"
                                                    aria-label="Name: activate to sort column descending"
                                                >
                                                    Age
                                                </th>

                                                <th
                                                    className="sorting_asc"
                                                    tabindex="0"
                                                    aria-controls="example23"
                                                    rowspan="1"
                                                    colspan="1"
                                                    aria-sort="ascending"
                                                    aria-label="Name: activate to sort column descending"
                                                >
                                                    City
                                                </th>

                                                <th
                                                    tabindex="0"
                                                    aria-controls="example23"
                                                    rowspan="1"
                                                    colspan="1"
                                                >
                                                    Gender
                                                </th>
                                                <th
                                                    tabindex="0"
                                                    aria-controls="example23"
                                                    rowspan="1"
                                                    colspan="1"
                                                >
                                                    Mobile No.
                                                </th>
                                                <th
                                                    tabindex="0"
                                                    aria-controls="example23"
                                                    rowspan="1"
                                                    colspan="1"
                                                >
                                                    Call
                                                </th>
                                                <th
                                                    tabindex="0"
                                                    aria-controls="example23"
                                                    rowspan="1"
                                                    colspan="1"
                                                >
                                                    Mail
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {this.state.arr.map(
                                                (person, index) => {
                                                    return (
                                                        <DisplayPerson
                                                            key={index}
                                                            name={person.name}
                                                            age={person.age}
                                                            city={person.city}
                                                            phNo={person.phNo}
                                                            mail={person.mail}
                                                            // {...person}
                                                            index={index}
                                                            funcProps={phNo => {
                                                                this.funcProps(
                                                                    phNo
                                                                );
                                                                // console.log("Called", funcProps);
                                                            }}
                                                            funcMail={mail => {
                                                                this.funcMail(
                                                                    mail
                                                                );
                                                                // console.log("Called", funcProps);
                                                            }}
                                                        />
                                                    );
                                                }
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;

// render(<App />, document.getElementById("root"));
