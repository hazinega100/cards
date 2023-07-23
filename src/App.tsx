import React from "react";
import "./App.css";
import {Card} from "./Card";
import {useSelector} from "react-redux";
import {RootState} from "./state/store";
import {CardsType} from "./state/reducer";

function App() {
    const cards = useSelector<RootState, CardsType[]>(state => state.reducer)
    return (
        <div className="App">
            <Card data={cards}/>
        </div>
    );
}

export default App;
