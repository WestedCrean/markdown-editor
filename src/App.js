import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import marked from 'marked';
import './App.css';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {code: "### My headline"};
  }
  render() {
    return(
      <textarea id="editor-textarea">{this.state.code}</textarea>
    );
  }
}

class View extends Component {
  constructor(props) {
    super(props);
    this.state = { document: '### My headline'};
  }
  render() {
    return(
      <div className="view"> {marked(this.state.document)}</div>
    );
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { code: ''};
  }
  handleChange(e) {
    this.setState({code: e.target.innerHTML});
  }
  render() {
    const code = this.state.code;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Markdown live editor</h1>
        </header>
        <div class="wrapper">
          <SplitPane split="vertical" defaultSize="50%">
            <Editor />
            <View />
          </SplitPane>
        </div>
      </div>
    );
  }
}

export default App;
