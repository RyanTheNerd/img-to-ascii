import React, { Component } from "react";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Image to ASCII</h1>
                <div id="control-panel">
                    <input type="file" id="img-upload" name></input>
                    <label for="columns">Columns: </label>
                    <input type="range" min="80" max="800" id="columns" name="columns"></input>
                </div>
            </div>
        );
    }
}

export default App;