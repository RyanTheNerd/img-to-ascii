import React, { Component } from "react";
import './css/styles.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.image = new Image();
        // Data url of a 1x1 pixel as placeholder image
        this.image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";

        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext('2d');

        // Create a test character to get the width from
        this.testChar = document.createElement("pre");

        // Set the canvas so that the text becomes the same size as the input image
        this.canvas.width = this.image.width / this.testChar.clientWidth;
        this.canvas.height = this.image.height / this.testChar.clientHeight;

        this.state = {
            columns: 80,
            charWidth: this.testChar.clientWidth,
            charHeight: this.testChar.clientHeight,
        }
    }
    render() {
        return (
            <div className="App">
                <h1 className="foo">Image to ASCII</h1>
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