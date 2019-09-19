import React from "react";
import "./css/style.css";
import TodoBody from "./components/TodoBody.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import store from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <Footer />
            <div className="container-fluid my-3">
                <TodoBody />
            </div>
        </Provider>
    );
};

export default App;
