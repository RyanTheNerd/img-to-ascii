import React, { Component } from "react";
import './css/styles.css';

const placeholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAUAAarVyFEAAAAASUVORK5CYII=";

class App extends Component {
    constructor(props) {
        super(props);

        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext('2d');

        // Create a test character to get the width from
        this.testChar = document.createElement("pre");


        this.state = {
            columns: 80,
            charHeight: this.testChar.clientHeight,
            charRatio: this.testChar.clientWidth / this.testChar.clientHeight,
            ASCII: "Upload an image to begin",
            inputImageData: placeholder,
            outputImageData: placeholder,
        }
        this.handleColumns = this.handleColumns.bind(this);
    }
    handleColumns(event) {
        this.setState({
            columns: event.target.value,
        })
    }
    handleImageUpload(originalImage) {
        // Set the canvas so that the text becomes the same size as the input image
        let scaledImage = {
            width: this.state.columns,
            height: this.state.charHeight * this.state.charRatio,
        }
        this.canvas.width = this.image.width / this.testChar.clientWidth;
        this.canvas.height = this.image.height / this.testChar.clientHeight;
    }
    render() {
        return (
            <div className="App">
                <h1>Image to ASCII</h1>
                <div id="container">
                    <div id="control-panel">
                        <label htmlFor="img-upload" id="img-upload-label">Upload Image: </label>
                        <input type="file" id="img-upload" name="img-upload" accept="image/*" style={{opacity: 0}}></input>
                        <label htmlFor="columns">Columns: </label>
                        <input type="range" min="80" max="800" value={this.state.columns} id="columns" name="columns" onChange={this.handleColumns}></input>
                    </div>
                    <div id="viewport">
                        <pre id="output">
                            {this.state.ASCII}
                        </pre>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;