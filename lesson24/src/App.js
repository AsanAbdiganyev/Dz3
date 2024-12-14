import React from "react";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import TodosPage from "./pages/TodosPage";

function App() {
    return (
        <div className="App">
            <AboutPage/>
            <MainPage/>
            <TodosPage/>
        </div>

    );
}

export default App;
