import React from "react";
import TodoBody from "./components/TodoBody";
import Header from "./components/Header";
import Footer from "./components/Footer";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./css/style.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Footer />
                <div className="container-fluid my-3">
                    <TodoBody />
                </div>
                <Routes />
            </BrowserRouter>
        </Provider>
    );
};

export default App;
