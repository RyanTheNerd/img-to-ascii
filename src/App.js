import React, { Component } from "react";
import './css/styles.css';


class App extends Component {
    constructor(props) {
        super(props);

        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext('2d');


        this.testChar = document.getElementById("#test-char");
        console.log(this.testChar.clientWidth);

        this.state = {
            columns: 80,
            charWidth: this.testChar.clientWidth,
            charHeight: this.testChar.clientHeight,
            charRatio: this.testChar.clientWidth / this.testChar.clientHeight,
            inputImage: new Image(),
            ASCII: "Upload an image to begin",
        }
        this.handleColumns = this.handleColumns.bind(this);
        this.handleImageUpload = this.handleImageUpload.bind(this);

        this.fileInput = React.createRef();
    }
    handleColumns(event) {
        this.setState({
            columns: event.target.value,
        })
    }
    handleImageUpload() {
        let file = this.fileInput.current.files[0];
        let reader = new FileReader();
        let image = this.state.inputImage;
        reader.onloadend = () => {
            image.onload = () => {
                this.drawInputToCanvas();
            }
            image.onload.bind(this);
            image.src = reader.result;
        }

        if(file) {
            reader.readAsDataURL(file);
        }
    }
    drawInputToCanvas(inputImage = this.state.inputImage) {
        // Set the canvas so that the text becomes the same size as the input image
        let inputRatio = inputImage.width / inputImage.height;
        let scaledImage = {
            width: this.state.columns,
            height: this.state.columns * (1/this.state.charRatio) * (1/inputRatio),
        }
        console.log(scaledImage);
        this.canvas.width = scaledImage.width;
        this.canvas.height = scaledImage.height;

        this.ctx.drawImage(inputImage, 0, 0, scaledImage.width, scaledImage.height);
        this.setState({
            outputImageData: this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height),
        });
    }
    render() {
        return (
            <div className="App">                
                <div id="container">
                    <div id="control-panel">
                        <label htmlFor="img-upload" id="img-upload-label">Upload Image: </label>
                        <input 
                            type="file" 
                            id="img-upload" 
                            name="img-upload" 
                            accept="image/*" 
                            style={{opacity: 0}} 
                            onChange={this.handleImageUpload} 
                            ref={this.fileInput}
                        ></input>

                        <label htmlFor="columns">Columns: </label>
                        <input 
                            type="range" 
                            min="80" 
                            max="800" 
                            value={this.state.columns} 
                            id="columns" 
                            name="columns" 
                            onChange={this.handleColumns}
                        ></input>
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