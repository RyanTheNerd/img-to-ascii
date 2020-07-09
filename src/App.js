import React, { Component } from "react";
import './css/styles.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.image = new Image();
        this.image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext('2d');
        this.testChar = document.createElement("pre");
        this.canvas.width = this.image.width / this.testChar.clientWidth;
        this.canvas.height = this.image.height / this.testChar.clientHeight;
    }
    render() {
        return (
            <div className="App">
                <h1>Image to ASCII</h1>
                <div id="container">
                    <div id="control-panel">
                        <input type="file" id="img-upload" name></input>
                        <label for="columns">Columns: </label>
                        <input type="range" min="80" max="800" id="columns" name="columns"></input>
                    </div>
                    <div id="viewport">
                        <pre id="output">
                        </pre>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;