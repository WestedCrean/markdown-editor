import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import marked from 'marked';
import './App.css';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.updateCode = this.updateCode.bind(this);
  }
  updateCode(event) {
    const text = event.target.value;
    this.props.onChange(text);
  }
  render() {
    return(
      <textarea id="editor-textarea" onChange={this.updateCode}></textarea>
    );
  }
}

class View extends React.Component {
  getMarkdown(md){
    return { __html: marked(md.toString(),{sanitize: true})}
  }
  render() {
    return(
      <div id="view" className="view" dangerouslySetInnerHTML={this.getMarkdown(this.props.markdownSrc)}></div>
    );
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { markdownSrc: '# Lorem ipsum'};
  }
  handleChange(md){
    this.setState({ markdownSrc: md });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Markdown live editor</h1>
        </header>
        <div>
          <SplitPane className="wrapper" split="vertical" defaultSize="50%">
            <Editor value={this.state.markdownSrc} onChange={this.handleChange}/>
            <View markdownSrc={this.state.markdownSrc} />
          </SplitPane>
        </div>
      </div>
    );
  }
}

export default App;
