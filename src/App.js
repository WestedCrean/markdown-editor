import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import './App.css';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {code: "My name is Ryszard"};
  }
  render() {
    return(
      <textarea id="editor-textarea">{this.state.code}</textarea>
    );
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Markdown live editor</h1>
        </header>
        <div class="wrapper">
          <SplitPane split="vertical" defaultSize="50%">
            <Editor />
            <div className="view">
            </div>
          </SplitPane>
        </div>
      </div>
    );
  }
}

export default App;
