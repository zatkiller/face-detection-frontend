import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank.js";
import Particles from "react-particles-js";
import "./App.css";

const particlesOptions = {
	particles: {
		number: {
			value: 30,
			density: {
				enable: true,
				value_area: 200,
			},
		},
	},
};

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: ",",
		};
	}

	onInputChange = (event) => {
		console.log(event.target.value);
	};

	onButtonSubmit = () => {
		console.log("click");
	};

	render() {
		return (
			<div className="App">
				<Particles className="particles" params={particlesOptions} />
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm
					onInputChange={this.onInputChange}
					onButtonSubmit={this.onButtonSubmit}
				/>
				{/* <FaceRecognition/> */}
			</div>
		);
	}
}

export default App;
