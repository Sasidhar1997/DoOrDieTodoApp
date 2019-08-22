import React from "react";
import "./css/style.css";
import TodoBody from "./components/TodoBody.js";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Footer />
            <TodoBody />
        </React.Fragment>
    );
};

export default App;
