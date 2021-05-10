import React from "react";
import Emitter from "../services/emitter";

import "../styles/Main.css";
import externalComponent from "../utils/externalComponent";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.loadNewScript = this.loadNewScript.bind(this);
  }
  state = { inputValue: "" };

  handleOnClick = (e) => {
    let event = new CustomEvent("INPUT_FROM_MAIN", {
      detail: { new: `${this.state.inputValue}` },
    });
    console.log(event);
    document.dispatchEvent(event);
  };

  loadNewScript = (url) => {
    const name = url.split("/dist/").reverse()[1];
    console.log("The name after splitting: ", name)
    if (window[name]) return window[name];

    window[name] = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.async = true;
      script.src = url;
      document.body.appendChild(script);
    });

    return window[name];
  };

  render() {
    return (
      <div className="main">
        <h3>Main content</h3>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={(e) => this.setState({ inputValue: e.target.value })}
        />
        <input
          type="button"
          value="Send to other components"
          onClick={this.handleOnClick}
        />
        <button
          onClick={() => this.loadNewScript(
            "http://localhost:8081/dist/index_bundle.js"
          )}
        >
          Header Element Load
        </button>
        <button
          onClick={() => this.loadNewScript(
            "http://localhost:8082/dist/index_bundle.js"
          )}
        >
          Sidebar Element Load
        </button>
      </div>
    );
  }
}

export default Main;
