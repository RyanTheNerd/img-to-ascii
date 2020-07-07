import React, { Component } from "react";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Image to ASCII</h1>
                <div id="control-panel">
                    <input type="file" id="img-upload" name></input>
                </div>
            </div>
        );
    }
}

export default App;